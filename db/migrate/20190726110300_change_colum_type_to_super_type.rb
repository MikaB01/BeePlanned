class ChangeColumTypeToSuperType < ActiveRecord::Migration[5.2]
  def change
    rename_column :supers, :type, :super_type
  end
end
