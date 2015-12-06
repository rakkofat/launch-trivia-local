class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |table|
      table.string :name, null: false
      table.integer :score, null: false
      table.boolean :current, null: false
    end
  end
end
