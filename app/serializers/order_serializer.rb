class OrderSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :customer_id, :purchased
  belongs_to :item
end
