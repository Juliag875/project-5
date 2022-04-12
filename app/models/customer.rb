class Customer < ApplicationRecord
  has_many :carts
  has_many :reviews
  has_many :items, through: :reviews

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
