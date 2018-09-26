class Game < ApplicationRecord
    has_many :players
    has_one :score
    accepts_nested_attributes_for :players
    accepts_nested_attributes_for :score

    def initializer()
        @score = Score.new()
    end
end
