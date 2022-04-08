class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :customer_id, :content, :rating
end
