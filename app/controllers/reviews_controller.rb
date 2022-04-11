class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  
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

  def not_found
    render json: {"error": "Address not found"}, status: :not_found
  end


end
