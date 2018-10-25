class Player < ApplicationRecord
    belongs_to :game

    validates_uniqueness_of :jersey_number, scope: :game_id
end
