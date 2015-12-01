class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |table|
      table.string :challenge
    end
  end
end
