class RemoveGameIdFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :game_id, :string
    remove_column :users, :integer, :string
  end
end
