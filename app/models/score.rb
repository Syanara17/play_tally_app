class Score < ApplicationRecord
    belongs_to :game, optional: true
end
