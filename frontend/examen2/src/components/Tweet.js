import React from 'react'

const Tweet = ({tweet}) =>
  <div className="tile" key={tweet.id}>

     <h4>Username: {tweet.user}</h4>

     <p>Body: {tweet.body}</p>
     <p className = "q">Publicado el: {tweet.created_at}</p>

  </div>


export default Tweet
