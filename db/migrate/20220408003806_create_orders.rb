class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :item_id
      t.integer :customer_id
      t.boolean :purchased

      t.timestamps
    end
  end
end
