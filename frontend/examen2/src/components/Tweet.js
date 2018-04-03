import React from 'react'

const Tweet = ({tweet}) =>
  <div className="tile" key={tweet.id}>
     <p>Body: {tweet.body}</p>

     <h4>Username: {tweet.user}</h4>
  </div>


export default Tweet
