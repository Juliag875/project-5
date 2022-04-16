class ItemsController < ApplicationController
  wrap_parameters format: []
  
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

  def destroy
    item = find_item
    item.destroy
    head :no_content
  end

  # PATCH /items/:id update

  private

  def find_item
    Item.find(params[:id])
  end

  def item_params
    params.permit(:brand, :title, :image, :price1, :price2, :size1, :size2, :rating, :description)
  end

end
