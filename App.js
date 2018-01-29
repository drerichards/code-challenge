import React, { Component } from 'react'
import axios from 'axios'
import ProjectList from './DinnerList'
var  Z_TOKEN = 'a82ed9c6fbde04baab0fb432e4eae61a'
export default class App extends Component {
    constructor() {
        super()
         this.state = {
            restaurant: [],
            btnPressed: false,
         }
    }
    async getRestaurant() {
        var axiosInstance = axios.create({
            baseURL: 'https://developers.zomato.com/api/v2.1',
            headers: {
            'Authorization': `token ${Z_TOKEN}`
            }
        })
        try {
            let response = await axiosInstance.get('/establishments')
            this.setState({
                restaurant: response.data,
               btnPressed: true
            })
        } catch (err) {
            console.error(err)
        }
    }
    displayApp() {
        if (this.state.btnPressed)
            return <DinnerList repos={this.state.restaurant}/>
        else
            return <button onClick={this.getRestaurant.bind(this)}>Get
                restaurant</button>
    }
    render() {
        return (
            <div>
                <h1>Never Linner</h1>
                {this.displayApp()}
           </div>
        )
   }
}