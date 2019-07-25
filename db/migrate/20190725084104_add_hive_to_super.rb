class AddHiveToSuper < ActiveRecord::Migration[5.2]
  def change
    add_reference(:supers, :hive, foreign_key: true )
  end
end
