class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :home_team
      t.string :visitor_team
      t.string :coach
      t.datetime :game_date

      t.timestamps
    end
  end
end
