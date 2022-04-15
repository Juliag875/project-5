class ItemsController < ApplicationController
  
  def index
    render json: Item.all, status: :ok
  end

  def show
    item = find_item
    render json: item, status: :ok
  end

  def create
    # byebug 
    item = Item.create!(item_params)
    render json: item, status: :created
  end


  # PATCH /items/:id update

  private

  def find_item
    Item.find(params[:id])
  end

  def item_params
    params.permit(:brand, :title)
  end

end
