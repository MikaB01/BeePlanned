class Super < ApplicationRecord
  belongs_to :hive

  has_many :frames
end
