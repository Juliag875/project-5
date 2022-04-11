class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :price1, :price2, :size1, :size2, :rating, :description
end
