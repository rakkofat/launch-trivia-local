require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'pry'

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

def load_gun
  rand(1..6)
end

def roulette(n)
  Player.all.to_a.sample(n)
end

get '/' do
  @title = "Hello World"
  erb :index
end

get '/players' do
  @players = Player.all
  erb :players
end

get '/play' do
  @shots = load_gun
  @drinkers = roulette(@shots)
  erb :play
end

post "/players" do
  unless (params[:name].nil? || params[:name].empty?)
    Player.create({name: params[:name], drinks: 0, challenges: 0})
  end
  redirect to("/players")
end

post "/players/:name" do
  if params[:name]
    player = Player.create({name: params[:name], drinks: 0, challenges: 0})
    status 201
    # headers "Location" => "/players/#{player.name}"
    headers "Location" => "/players"
  else
    status 400
  end
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
