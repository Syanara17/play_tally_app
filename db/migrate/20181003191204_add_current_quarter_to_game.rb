class AddCurrentQuarterToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :current_quarter, :integer
  end
end
