//
//  CustomImageView.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/25/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import UIKit

var imageCache = [String: UIImage]()

final class CustomImageView: UIImageView {
    
    fileprivate var lastUrlUsedToLoadImage: String?
    
    func loadImageWith(urlString: String) {
        
        //No image
        if urlString == "" {
            
            self.image = UIImage(named: "zomato")
            
        } else {
            
            lastUrlUsedToLoadImage = urlString
            
            self.image = nil
            
            if let cachedImage = imageCache[urlString] {
                
                self.image = cachedImage
                return
            }
            
            guard let url = URL(string: urlString) else { return }
            
            URLSession.shared.dataTask(with: url) { (data, response, error) in
                
                if error != nil {
                    
                    print(String(describing: error?.localizedDescription))
                }
                
                //This check is in place to deal with images loading in the wrong order
                if url.absoluteString != self.lastUrlUsedToLoadImage { return }
                
                guard let imageData = data else { return }
                
                let image = UIImage(data: imageData)
                
                imageCache[url.absoluteString] = image
                
                DispatchQueue.main.async {
                    
                    self.image = image
                }
                
                }.resume()
        }
    }
}
