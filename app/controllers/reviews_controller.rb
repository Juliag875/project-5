class ReviewsController < ApplicationController
  wrap_parameters format: []
  
  def index
    render json: Review.all, status: :ok
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

  private

  def find_review
    Review.find(params[:id])
  end

  def review_params
    params.permit(:name, :title, :content)
  end

end
