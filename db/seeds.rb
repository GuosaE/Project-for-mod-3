# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

require 'rest-client'

url = RestClient.get 'https://api.spoonacular.com/recipes/random?number=10&apiKey=32b2ddc0acd845088d6d2ef0e022e262'

url_array = JSON.parse(url)["recipes"]

url_array.each do |recipe|
    Recipe.create(title: recipe["title"],
    image: recipe["image"],
    servings: recipe["servings"],
    readyInMinutes: recipe["readyInMinutes"],
    sourceName: recipe["sourceName"],
    sourceUrl: recipe["sourceUrl"],
    cuisines: recipe["cuisines"],
    dairyFree: recipe["dairyFree"],
    glutenFree: recipe["glutenFree"],
    vegan: recipe["vegan"],
    vegetarian: recipe["vegetarian"],
    ingredients: recipe["extendedIngredients"])
end




# 10.times do
#     Recipe.create(title: Faker::Book.title, 
#             image: Faker::Address.country, 
#             servings: Faker::Ancient.primordial, 
#             readyInMinutes: Faker::Nation.language, 
#             sourceName: Faker::Marketing.buzzwords, 
#             sourceUrl: Faker::Marketing.buzzwords,
#             cuisines: Faker::Marketing.buzzwords,
#             dairyFree: false,
#             glutenFree: false,
#             vegan: false,
#             vegetarian: false,
#             ingredients: Faker::Marketing.buzzwords            
#             )
# end