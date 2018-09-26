class Score < ApplicationRecord

    belongs_to :game

    def initializer()
        self.home_quarter_one = 0
        self.home_quarter_two = 0
        self.home_quarter_three = 0
        self.home_quarter_four = 0
        self.visit_quarter_one = 0
        self.visit_quarter_two = 0
        self.visit_quarter_three = 0
        self.visit_quarter_four = 0
    end

end
