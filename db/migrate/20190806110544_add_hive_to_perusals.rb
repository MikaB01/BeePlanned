class AddHiveToPerusals < ActiveRecord::Migration[5.2]
  def change
    add_reference(:perusals, :hive, foreign_key: true )
  end
end
