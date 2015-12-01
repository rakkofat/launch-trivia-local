class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |table|
      table.string :name
      table.integer :drinks
      table.integer :challenges
    end
  end
end
