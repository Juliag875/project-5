class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :purchased
end
