import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet';

class TweetForm extends Component{
    constructor(props){
		super(props)
		this.state = {
            body: this.props.tweet.body,
            user: this.props.tweet.user
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
            user: this.state.user
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
            <div className= "new">
                <form onBlur={this.handleBlur}>
                    <textarea className="input" name="body" placeholder="Que esta pasando?:"
                    value={this.state.body}
                    onChange={this.handleInput}></textarea>
                    <input className="input" type="text" name="user" placeholder="User"
                    value={this.state.user}
                    onChange={this.handleInput} />
                </form>
            </div>
        );
    }
}

export default TweetForm
