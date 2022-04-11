class OrdersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  
  def index
    render json: Order.all, status: :ok
  end

  def show
    order = find_order
    render json: order, status: :ok
  end

  private

  def find_order
    Order.find(params[:id])
  end

  def not_found
    render json: {"error": "Address not found"}, status: :not_found
  end
end
