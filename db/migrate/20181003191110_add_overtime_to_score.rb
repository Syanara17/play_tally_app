class AddOvertimeToScore < ActiveRecord::Migration[5.1]
  def change
    add_column :scores, :home_overtime, :integer
    add_column :scores, :visit_overtime, :integer
  end
end
