class ReviewsController < ApplicationController
  
  def index
    render json: Review.all, status: :ok
  end

  def show
    review = find_review
    render json: review, status: :ok
  end

  private

  def find_review
    Review.find(params[:id])
  end

end
