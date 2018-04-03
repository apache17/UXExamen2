import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet';

class TweetForm extends Component{
    constructor(props){
		super(props)
		this.state = {
            body: this.props.tweet.body,
            username: this.props.tweet.username
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBlur = () => {
        const tweet = {
            body: this.state.body,
            username: this.state.username
        }
        axios.put(
            `http://localhost:3001/api/v1/tweets/${this.props.tweet.id}`,
            {
                tweet: tweet
            }
        ).then(response => {
            console.log(response)
            this.props.updateTweet(response.data);
        }).catch(error => console.log(error))
    }

    render() {
        return(
            <div className= "twitter-tweet">
                <form onBlur={this.handleBlur}>
                    <textarea className="input" name="body" placeholder="Que esta pasando?:"
                    value={this.state.body}
                    onChange={this.handleInput}></textarea>
                    <input className="input" type="text" name="username" placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInput} />
                </form>
            </div>
        );
    }
}

export default TweetForm
