class AddLocationToHive < ActiveRecord::Migration[5.2]
  def change
    add_reference(:hives, :location, foreign_key: true )
  end
end
