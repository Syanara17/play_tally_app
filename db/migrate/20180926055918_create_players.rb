class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.integer :jersey_number
      t.string :name
      t.integer :quarter_one_plays
      t.integer :quarter_two_plays
      t.integer :quarter_three_plays
      t.integer :quarter_four_plays
      t.string :position
      t.string :comment

      t.timestamps
    end
  end
end
