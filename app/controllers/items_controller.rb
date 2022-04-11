class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    render json: Item.all, status: :ok
  end

  def show
    item = find_item
    item json: item, status: :ok
  end

  private

  def find_item
    Item.find(params[:id])
  end

  def not_found
    render json: {"error": "Address not found"}, status: :not_found
  end

end
