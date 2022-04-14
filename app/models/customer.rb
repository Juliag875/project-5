class Customer < ApplicationRecord
  has_many :orders
  # has_many :items, through: :orders
  has_many :reviews
  has_many :items, through: :reviews

 has_secure_password

 validates :username, presence: true, uniqueness: { case_sensitive: false }
end
