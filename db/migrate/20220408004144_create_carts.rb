class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :customer_id
      t.boolean :purchased

      t.timestamps
    end
  end
end
