class OrderSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :customer_id, :purchased
end
