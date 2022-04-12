class OrdersController < ApplicationController
  
  def index
    render json: Order.all, status: :ok
  end

  def show
    order = find_order
    render json: order, status: :ok
  end

   # DELETE /orders/:id destroy

  private

  def find_order
    Order.find(params[:id])
  end

end
