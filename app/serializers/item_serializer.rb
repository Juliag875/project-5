class ItemSerializer < ActiveModel::Serializer
  attributes :id, :brand, :title, :image, :price1, :price2, :size1, :size2, :rating, :item_category, :description
end
