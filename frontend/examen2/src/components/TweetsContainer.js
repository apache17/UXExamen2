import React, { Component } from 'react'
import axios from 'axios'

class TweetsContainer extends Component {
  render() {
    return (
      <div>
        Tweets
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/tweets.json')
    .then(response => {
      console.log(response)
      this.setState({tweets: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.tweets.map((tweet) => {
          return(
            <div className="tile" key={tweet.id} >
              <h4>{tweet.body}</h4>
              <p>{tweet.user}</p>
            </div>
          )
        })}
      </div>
    );
  }


}



export default TweetsContainer
