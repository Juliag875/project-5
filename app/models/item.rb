class Item < ApplicationRecord
  has_many :orders
  has_many :carts, through: :orders
  
  has_many :reviews
  has_many :customers, through: :reviews
end
