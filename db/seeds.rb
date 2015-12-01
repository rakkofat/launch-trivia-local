# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Example:
#
#   Person.create(first_name: 'Eric', last_name: 'Kelly')

player_attributes = [
  { name: 'Fatty', drinks: 0, challenges: 0 },
  { name: 'Joseph', drinks: 0, challenges: 0 },
  { name: 'Chelsea', drinks: 0, challenges: 0 },
  { name: 'Lily', drinks: 0, challenges: 0 },
  { name: 'Michelle', drinks: 0, challenges: 0 },
  { name: 'Sally', drinks: 0, challenges: 0 },
  { name: 'Tali', drinks: 0, challenges: 0 },
  { name: 'Julie', drinks: 0, challenges: 0 },
  { name: 'Nathan', drinks: 0, challenges: 0 }
]

player_attributes.each do |attributes|
  Player.create(attributes)
end

challenge_attributes = [
  { challenge: 'If you could trade bodies with another player who would it be?' },
  { challenge: 'who in the group would you vote off of the island?' },
  { challenge: 'Pick a player and make them laugh by whatever means you can. If you cannot make them laugh in 30 seconds you drink.' },
  { challenge: 'Tuck in your shirt and drop an icecube down it!' },
  { challenge: 'High five the room' },
  { challenge: 'Continuously talk for 2 minutes without stopping.' },
]

challenge_attributes.each do |attributes|
  Challenge.create(attributes)
end
