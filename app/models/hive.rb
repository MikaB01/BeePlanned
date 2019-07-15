class Hive < ApplicationRecord
  belongs_to :location

  validates :hive_number, presence: :true
end
