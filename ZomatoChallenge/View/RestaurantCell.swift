//
//  RestaurantCell.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/25/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import UIKit

protocol RestaurantCellDelegate {
    func menuBtnTapped(cell: RestaurantCell)
}

final class RestaurantCell: UITableViewCell {

    //Outlets
    @IBOutlet private weak var nameLbl: UILabel!
    @IBOutlet private weak var aggRatingLbl: UILabel!
    @IBOutlet private weak var localityLbl: UILabel!
    @IBOutlet private weak var votesLbl: UILabel!
    @IBOutlet private weak var cuisineLbl: UILabel!
    @IBOutlet private weak var avgCostLbl: UILabel!
    @IBOutlet private weak var featuredImageView: CustomImageView!
    @IBOutlet weak var menuBtn: UIButton!
    
    var delegate: RestaurantCellDelegate?
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        aggRatingLbl.layer.cornerRadius = 5
        aggRatingLbl.layer.masksToBounds = true
        
        menuBtn.layer.cornerRadius = 5
        menuBtn.layer.masksToBounds = true
    }

    ///This method takes in a restaurant object and sets up our custom cell
    func configureCell(restaurant: Restaurant) {
        nameLbl.text = restaurant.name
        aggRatingLbl.text = restaurant.aggregateRating
        localityLbl.text = restaurant.locality.uppercased()
        votesLbl.text = "\(restaurant.votes) reviews"
        cuisineLbl.text = restaurant.cuisines
        avgCostLbl.text = "$\(restaurant.avgCostForTwo) for two (approx.)"
        aggRatingLbl.backgroundColor = UIColor(hex: restaurant.ratingColor)
        featuredImageView.loadImageWith(urlString: restaurant.featuredImageUrl)
    }

    @IBAction func menuBtnPressed(_ sender: UIButton) {
        guard delegate != nil else { return }
        delegate?.menuBtnTapped(cell: self)
    }
}
