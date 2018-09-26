class AddScoreIdToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :score_id, :integer
    add_index :games, :score_id
  end
end
