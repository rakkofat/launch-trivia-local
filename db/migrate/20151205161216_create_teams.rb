class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |table|
      table.string :name, null: false
      table.integer :score
    end
  end
end
