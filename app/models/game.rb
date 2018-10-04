class Game < ApplicationRecord
    has_many :players, inverse_of: :game, dependent: :destroy
    has_one :score, inverse_of: :game
    accepts_nested_attributes_for :players, reject_if: :all_blank, allow_destroy: true
    accepts_nested_attributes_for :score, allow_destroy: true
end
