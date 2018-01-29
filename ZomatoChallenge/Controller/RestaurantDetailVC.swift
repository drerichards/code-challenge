//
//  RestaurantDetailVC.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/25/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import UIKit

typealias Review = ReviewMetaData.ReviewCollection.Review

class RestaurantDetailVC: UIViewController {
    
    //Outlets
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var reviewSegmentedControl: UISegmentedControl!
    
    //Properties
    var restaurant: Restaurant?
    var reviews = [Review]()
    var activityIndicator = UIActivityIndicatorView()
    
    private var ratingSegment = 0
    private var timeSegment = 1

    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = "Reviews"
        
        setupActivityIndicator()
        
        tableView.rowHeight = UITableViewAutomaticDimension
        tableView.estimatedRowHeight = 217

        guard let restaurantId = restaurant?.id else { return }
        
        getReviewsForRestaurant(with: restaurantId) {
            self.tableView.reloadData()
            self.activityIndicator.stopAnimating()
        }
    }
    
    private func setupActivityIndicator() {
        
        view.addSubview(activityIndicator)
        activityIndicator.center = self.view.center
        activityIndicator.activityIndicatorViewStyle = .gray
        activityIndicator.startAnimating()
    }
    
    func getReviewsForRestaurant(with id: String, completion: @escaping () -> ()) {
        
        guard let queryURL = URL(string: "\(API_ROOT)/reviews?res_id=\(id)") else { return }
        
        var request = URLRequest(url: queryURL)
        request.setValue(API_KEY, forHTTPHeaderField: "user-key")
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
            
            guard error == nil else {
                print(String(describing: error?.localizedDescription))
                return
            }
            
            guard let content = data else {
                print("No data")
                return
            }
            
            do {
                
                let decoder = JSONDecoder()
                let decoded = try decoder.decode(ReviewMetaData.self, from: content)
                let decodedReviews = decoded.user_reviews.map({ $0.review })
                
                decodedReviews.forEach({ review in
                    self.reviews.append(review)
                })
                
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
    
    //MARK: - IBActions
    @IBAction func reviewSegmentControlChanged(_ sender: UISegmentedControl) {
        self.tableView.reloadData()
    }
    
}

//MARK: - Tableview Delegate Datasource
extension RestaurantDetailVC: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return reviews.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "reviewCell", for: indexPath) as? ReviewCell else {
            fatalError("Could not dequeue cell")
        }
        
        var sortedReviews = [Review]()
        
        switch reviewSegmentedControl.selectedSegmentIndex {
            
        case ratingSegment:
            sortedReviews = self.reviews.sorted(by: { (review1, review2) -> Bool in
                return review1.rating > review2.rating
            })
            
        case timeSegment:
            sortedReviews = self.reviews.sorted(by: { (review1, review2) -> Bool in
                return review1.timestamp > review2.timestamp
            })
            
        default:
            break
        }
        
        let review = sortedReviews[indexPath.row]
        
        cell.configureCell(review: review)
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 217
    }
}
