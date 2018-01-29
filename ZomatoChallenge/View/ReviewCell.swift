//
//  ReviewCell.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/27/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import UIKit

final class ReviewCell: UITableViewCell {

    @IBOutlet private weak var userImageView: CustomImageView!
    @IBOutlet private weak var userNameLbl: UILabel!
    @IBOutlet private weak var foodieLevelLbl: UILabel!
    @IBOutlet private weak var ratingTextLbl: UILabel!
    @IBOutlet private weak var reviewTimeLbl: UILabel!
    @IBOutlet private weak var ratingScoreLbl: UILabel!
    @IBOutlet private weak var reviewTextLbl: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        setupRoundCorners()
    }
    
    private func setupRoundCorners() {
        userImageView.layer.cornerRadius = 25
        userImageView.layer.masksToBounds = true
        
        ratingScoreLbl.layer.cornerRadius = 5
        ratingScoreLbl.layer.masksToBounds = true
        
        foodieLevelLbl.layer.cornerRadius = 5
        foodieLevelLbl.layer.masksToBounds = true
    }
    
    func configureCell(review: Review) {
        userNameLbl.text = review.reviewerName
        foodieLevelLbl.text = String(review.reviewerFoodieLevelNum)
        foodieLevelLbl.backgroundColor = UIColor(hex: review.reviewerFoodieLevelColor)
        ratingTextLbl.text = "\"\(review.reviewTitle)\""
        reviewTimeLbl.text = review.reviewTime
        ratingScoreLbl.text = String(review.rating)
        ratingScoreLbl.backgroundColor = UIColor(hex: review.ratingColor)
        reviewTextLbl.text = review.reviewText
        
        userImageView.loadImageWith(urlString: review.reviewerProfilePictureUrl)
    }
}
