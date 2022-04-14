class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :customer_id, :name, :title, :content
end
