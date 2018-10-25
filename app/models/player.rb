class Player < ApplicationRecord
    belongs_to :game

    validates_uniqueness_of :jersey_number, scope: :game_id

    def total_plays
        self.quarter_one_plays.to_i + self.quarter_two_plays.to_i + self.quarter_three_plays.to_i + self.quarter_four_plays.to_i + self.overtime_plays.to_i
    end
end
