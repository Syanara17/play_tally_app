class AddOvertimeToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :overtime_plays, :integer
  end
end
