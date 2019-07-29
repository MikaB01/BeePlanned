class AddSuperToFrame < ActiveRecord::Migration[5.2]
  def change
    add_reference(:frames, :super, foreign_key: true )
  end
end
