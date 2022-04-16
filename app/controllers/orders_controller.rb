class OrdersController < ApplicationController
  wrap_parameters format: []
  
  def index
    render json: Order.all, status: :ok
  end

  def show
    order = find_order
    render json: order, status: :ok
  end

  def create
    # byebug 
    order = Order.create!(order_params)
    render json: order, status: :created
  end

  def destroy
    order = find_order
    order.destroy
    head :no_content
  end

   # DELETE /orders/:id destroy

  private

  def find_order
    Order.find(params[:id])
  end

  def order_params
    params.permit(:item_id, :customer_id, :purchased)
  end

end
