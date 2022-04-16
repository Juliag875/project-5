class Item < ApplicationRecord
  has_many :orders, dependent: :destroy
  # has_many :customers, through: :orders
  
  has_many :reviews, dependent: :destroy
  has_many :customers, through: :reviews
end
