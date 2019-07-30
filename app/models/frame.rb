class Frame < ApplicationRecord
  belongs_to :super

  validates :letter, presence: :true, length: { maximum: 1 }
end
