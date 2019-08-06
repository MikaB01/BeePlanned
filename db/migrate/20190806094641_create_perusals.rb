class CreatePerusals < ActiveRecord::Migration[5.2]
  def change
    create_table :perusals do |t|
      t.integer :population_size
      t.integer :honeycomb_seat
      t.integer :gentleness
      t.integer :brood
      t.integer :bees
      t.boolean :drone_brood_cutted
      t.boolean :queen_seen
      t.float :hive_weight
      t.text :remark
      t.date :perusal_date

      t.timestamps
    end
  end
end
