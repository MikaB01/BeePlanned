class Location < ApplicationRecord
  belongs_to :user

  validates :name, presence: :true

  has_many :hives
end
