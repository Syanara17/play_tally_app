class AddWeekToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :week, :integer
  end
end
