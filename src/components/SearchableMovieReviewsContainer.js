import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{

  state = {
    reviews: [],
    searchTerm: ""
  }
  
  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(resp => resp.json() )
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  render(){
    return(
      <div className={'searchable-movie-reviews'} >
        <form onSubmit={this.handleSubmit} >
          Search for Reviews:
          <input type='text' onChange={this.handleChange} value={this.state.searchTerm} />
          <input type='submit' />
        </form>
        {this.state.reviews ? <MovieReviews reviews={this.state.reviews} /> : "Fetching..." }
      </div>
    )
  }
}