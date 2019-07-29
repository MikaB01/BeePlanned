class CreateFrames < ActiveRecord::Migration[5.2]
  def change
    create_table :frames do |t|
      t.string :letter
      t.string :frame_type

      t.timestamps
    end
  end
end
