class Cart < ApplicationRecord
  belongs_to :customer
  
  has_many :orders
  has_many :items, through: :orders
end
