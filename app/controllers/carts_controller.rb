class CartsController < ApplicationController
  def index
    render json: Review.all, status: :ok
  end
end