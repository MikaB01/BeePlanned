class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :country
      t.string :state
      t.integer :zip_code
      t.string :city
      t.string :street
      t.string :street_number
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
