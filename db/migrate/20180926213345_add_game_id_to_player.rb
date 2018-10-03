class AddGameIdToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :game_id, :integer
    add_index :players, :game_id
  end
end
