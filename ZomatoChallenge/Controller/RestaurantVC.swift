//
//  RestaurantVC.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/23/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import UIKit
import SafariServices

typealias Restaurant = RestaurantsMetaData.RestaurantCollection.Restaurant

final class RestaurantVC: UIViewController {
    //Outlets
    @IBOutlet weak var tableView: UITableView!
    
    //Properties
    private var restaurants = [Restaurant]()
    private var filteredRestaurants = [Restaurant]()
    private var activityIndicator = UIActivityIndicatorView()
    private var selectedRestaurant: Restaurant?
    private let searchController = UISearchController(searchResultsController: nil)

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNavBar()
        setupSearchController()
        setupActivityIndicator()
        
        getRestaurantData {
           self.tableView.reloadData()
            self.activityIndicator.stopAnimating()
        }
    }
    
    private func setupNavBar() {
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedStringKey.foregroundColor: UIColor.white]
    }
    
    private func setupSearchController() {
        
        self.searchController.searchResultsUpdater = self
        self.searchController.searchBar.delegate = self
        self.searchController.obscuresBackgroundDuringPresentation = false
        self.searchController.searchBar.barStyle = .black
        self.searchController.searchBar.tintColor = .white
        self.definesPresentationContext = true
        self.navigationItem.searchController = searchController
    }
    
    // Returns true if the text is empty or nil
    func searchBarIsEmpty() -> Bool {
        return searchController.searchBar.text?.isEmpty ?? true
    }
    
    func filterContentForSearchText(_ searchText: String, scope: String = "All") {
        filteredRestaurants = restaurants.filter({( restaurant : Restaurant) -> Bool in
            return restaurant.name.lowercased().contains(searchText.lowercased())
        })
        
        tableView.reloadData()
    }
    
    func isFiltering() -> Bool {
        return searchController.isActive && !searchBarIsEmpty()
    }
    
    private func setupActivityIndicator() {
        
        view.addSubview(activityIndicator)
        activityIndicator.center = self.view.center
        activityIndicator.activityIndicatorViewStyle = .gray
        activityIndicator.startAnimating()
    }

    private func getRestaurantData(completion: @escaping () -> Void) {
        
        guard let queryURL = URL(string: "\(API_ROOT)/search?entity_id=280&entity_type=city") else { return }
        
        var request = URLRequest(url: queryURL)
        request.setValue(API_KEY, forHTTPHeaderField: "user-key")
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
            
            guard error == nil else {
                print(String(describing: error?.localizedDescription))
                return
            }
            //Unwrap the data coming back from API call
            guard let content = data else { return }
            
            do {
                
                let decoder = JSONDecoder()
                let decoded = try decoder.decode(RestaurantsMetaData.self, from: content)
                let decodedRestaurants = decoded.restaurants.map({ $0.restaurant })
                
                for restaurant in decodedRestaurants {
                    self.restaurants.append(restaurant)
                }
                
                //Run completion code on the main thread
                DispatchQueue.main.async {
                    completion()
                }
                
                
            } catch DecodingError.keyNotFound(let key, let context) {
                print("Missing key in JSON: \(key) \(context)")
                
            } catch DecodingError.typeMismatch(let type, let context) {
                print("Wrong type in JSON: \(type) \(context)")
                
            } catch {
                print("Unable to parse JSON: \(error.localizedDescription)")
            }
        }
        
        task.resume()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "goToRestaurantDetailVC" {
            guard let destVC = segue.destination as? RestaurantDetailVC else { return }
            destVC.restaurant = sender as? Restaurant
        }
    }
    
    @IBAction func topBtnPressed(_ sender: Any) {
        let indexPath = IndexPath(item: 0, section: 0)
        self.tableView.scrollToRow(at: indexPath, at: .top, animated: true)
    }
    
}

//MARK: - RestaurantCellDelegate
extension RestaurantVC: RestaurantCellDelegate {
    
    func menuBtnTapped(cell: RestaurantCell) {
        guard let indexPath = tableView.indexPath(for: cell) else { return }
        let restaurant = self.restaurants[indexPath.row]
        let safariVC = SFSafariViewController(url: restaurant.menuUrl)
        present(safariVC, animated: true, completion: nil)
        
    }
}

// MARK: - UISearchResultsUpdating Delegate
extension RestaurantVC: UISearchResultsUpdating {
    
    func updateSearchResults(for searchController: UISearchController) {
        guard let searchText = searchController.searchBar.text else { return }
        filterContentForSearchText(searchText)
    }
}

// MARK: - UISearchBar Delegate
extension RestaurantVC: UISearchBarDelegate {
    
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        
        searchBar.resignFirstResponder()
        
        guard let term = searchBar.text , term.isEmpty == false else { return }
        
        print(term)
    }
}

//MARK: - Tableview Delegate Datasource Methods
extension RestaurantVC: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        if isFiltering() {
            return filteredRestaurants.count
        }
        
        return restaurants.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "restaurantCell", for: indexPath) as? RestaurantCell else { fatalError("Unable to dequeue cell")}
        
        cell.delegate = self
        
        let restaurant: Restaurant
        
        if isFiltering() {
            
            restaurant = filteredRestaurants[indexPath.row]
        } else {
            
            restaurant = restaurants[indexPath.row]
        }
        
        cell.configureCell(restaurant: restaurant)
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        let restaurant = self.restaurants[indexPath.row]
        performSegue(withIdentifier: "goToRestaurantDetailVC", sender: restaurant)
        
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 434
    }
}


