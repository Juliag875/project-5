class Customer < ApplicationRecord
  has_many :carts
  has_many :reviews
  has_many :items, through: :reviews
end
