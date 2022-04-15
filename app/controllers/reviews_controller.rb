class ReviewsController < ApplicationController
  wrap_parameters format: []

  def index 
    if params[:item_id]
      item_review = Item.find(params[:item_id])
      reviews = item_review.reviews
    else
      reviews = Review.all
    end
    render json: reviews, status: :ok
  end

  def show
    review = find_review
    render json: review, status: :ok
  end

  def create
    # byebug 
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def destroy
    review = find_review
    review.destroy
    head :no_content
  end

  private

  def find_review
    Review.find(params[:id])
  end

  def review_params
    params.permit(:item_id, :customer_id, :name, :title, :content)
  end

end
