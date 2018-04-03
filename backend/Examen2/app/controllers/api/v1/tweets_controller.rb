module Api::V1
  class TweetsController < ApplicationController
    def index
      @tweets = Tweet.all
      render json: @tweets
    end


    def create
      @tweet = Tweet.create(tweet_params)
      render json: @tweet
    end

    private
    def tweet_params
      params.require(:tweet).permit(:body, :user)
    end
  end
end
