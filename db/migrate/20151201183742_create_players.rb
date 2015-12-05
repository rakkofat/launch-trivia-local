class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |table|
      table.string :name, null: false;
      table.integer :team_id, null: false;
    end
  end
end
