class Hive < ApplicationRecord
  belongs_to :location

  validates :hive_number, presence: :true
  has_many :supers
end
