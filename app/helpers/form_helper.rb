module FormHelper
    def setup_game(game)
      game.score ||= Score.new
      game
    end
  end