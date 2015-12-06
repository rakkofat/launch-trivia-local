require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Example:
#
#   Person.create(first_name: 'Eric', last_name: 'Kelly')

# player_attributes = [
#   { name: 'Fatty', drinks: 0, challenges: 0 },
#   { name: 'Joseph', drinks: 0, challenges: 0 },
#   { name: 'Chelsea', drinks: 0, challenges: 0 },
#   { name: 'Lily', drinks: 0, challenges: 0 },
#   { name: 'Michelle', drinks: 0, challenges: 0 },
#   { name: 'Sally', drinks: 0, challenges: 0 },
#   { name: 'Tali', drinks: 0, challenges: 0 },
#   { name: 'Julie', drinks: 0, challenges: 0 },
#   { name: 'Nathan', drinks: 0, challenges: 0 }
# ]

player_attributes = []

10.times do
  player_attributes << { name: Faker::Name.name, team_id: 0 }
end

player_attributes.each do |attributes|
  Player.create(attributes)
end

team_attributes = [
  { name: 'Team 1', score: 0, current: TRUE },
  { name: 'Team 2', score: 0, current: FALSE },
  { name: 'Team 3', score: 0, current: FALSE },
  { name: 'Team 4', score: 0, current: FALSE }
]

team_attributes.each do |attributes|
  Team.create(attributes)
end
