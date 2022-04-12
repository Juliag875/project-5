class ItemsController < ApplicationController
  
  def index
    render json: Item.all, status: :ok
  end

  def show
    item = find_item
    render json: item, status: :ok
  end

  # PATCH /items/:id update

  private

  def find_item
    Item.find(params[:id])
  end

end
