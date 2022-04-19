class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :brand
      t.string :title
      t.string :image
      t.string :price1
      t.string :price2
      t.string :size1
      t.string :size2
      t.integer :rating
      t.string :item_category
      t.text :description

      t.timestamps
    end
  end
end
