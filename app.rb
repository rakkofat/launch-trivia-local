require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'pry'
require 'sinatra/json'

configure :development, :test do
  require 'pry'
end

configure do
  set :views, 'app/views'
end

enable :sessions

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/' do
  @title = "Hello World"
  erb :index
end

get '/players' do
  @players = Player.where(team_id: 0);
  @team_1 = Player.where(team_id: 1);
  @team_2 = Player.where(team_id: 2);
  @team_3 = Player.where(team_id: 3);
  @team_4 = Player.where(team_id: 4);
  erb :players
end

get '/players.json' do
  content_type :json

  json Player.all
end

get '/play' do
  @team1 = Team.find(1)
  @team2 = Team.find(2)
  @team3 = Team.find(3)
  @team4 = Team.find(4)
  erb :play
end

post "/players" do
  unless (params[:name].nil? || params[:name].empty?)
    Player.create({name: params[:name], team_id: 0})
  end
  redirect to("/players")
end

post "/players.json" do
  if params[:name]
    player = Player.create({name: params[:name], team_id: 0})
    status 201
    # headers "Location" => "/players/#{player.name}"
    # headers "Location" => "/players"
  else
    status 400
  end
end

post "/update-players.json" do
  everyone = JSON.parse(params[:everyone])
  everyone.each do |update|
    player = Player.find_by(name: update["name"])
    player.team_id = update["team_id"]
    player.save
  end
  status 201
end

post "/reset-players" do
  everyone = JSON.parse(params[:everyone])
  everyone.each do |update|
    player = Player.find_by(name: update["name"])
    player.team_id = "0"
    player.save
  end
  status 201
end

post "/update-team" do
  if params[:name]
    team = Team.find_by(name: params[:name])
    team.score = params[:score]
    team.save
  end
  status 200
end

get '/challenges' do
  @challenges = Challenge.all
  erb :challenges
end

post "/challenges" do
  unless (params[:challenge].nil? || params[:challenge].empty?)
    Challenge.create({challenge: params[:challenge]})
  end
  redirect to("/challenges")
end

post "/challenges/:challenge" do
  if params[:challenge]
    challenge = Challenge.create({challenge: params[:challenge]})
    status 201
    # headers "Location" => "/players/#{player.name}"
    headers "Location" => "/challenges"
  else
    status 400
  end
end
