class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :home_quarter_one
      t.integer :home_quarter_two
      t.integer :home_quarter_three
      t.integer :home_quarter_four
      t.integer :visit_quarter_one
      t.integer :visit_quarter_two
      t.integer :visit_quarter_three
      t.integer :visit_quarter_four

      t.timestamps
    end
  end
end
