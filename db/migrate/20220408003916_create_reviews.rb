class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :item_id
      t.integer :customer_id
      t.text :content

      t.timestamps
    end
  end
end
