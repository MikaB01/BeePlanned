class CreateHives < ActiveRecord::Migration[5.2]
  def change
    create_table :hives do |t|
      t.integer :hive_number
      t.string :colony_type
      t.integer :year_color
      t.date :colony_created_at
      t.date :queen_added_at
      t.string :breed
      t.string :hive_type

      t.timestamps
    end
  end
end
