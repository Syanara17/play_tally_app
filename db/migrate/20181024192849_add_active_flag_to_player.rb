class AddActiveFlagToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :active, :integer
  end
end
