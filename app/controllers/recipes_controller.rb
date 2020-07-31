class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end


    def create
        recipe = Recipe.new(title: params[:title], 
                            image: params[:image], 
                            servings: params[:servings], 
                            readyInMinutes: params[:readyInMinutes], 
                            sourceName: params[:sourceName], 
                            sourceUrl: params[:sourceUrl],
                            cuisines: params[:cuisines],
                            dairyFree: params[:dairyFree],
                            glutenFree: params[:glutenFree],
                            vegan: params[:vegan],
                            vegetarian: params[:vegetarian],
                            ingredients: params[:ingredients])
        if recipe.save
            render json: recipe          
        else
            render json: recipe.errors, status: :unprocessable_entity
        end
    end


    def update
        if recipe.update(title: params[:title], 
            image: params[:image], 
            servings: params[:servings], 
            readyInMinutes: params[:readyInMinutes], 
            sourceName: params[:sourceName], 
            sourceUrl: params[:sourceUrl],
            cuisines: params[:cuisines],
            dairyFree: params[:dairyFree],
            glutenFree: params[:glutenFree],
            vegan: params[:vegan],
            vegetarian: params[:vegetarian],
            ingredients: params[:ingredients])
            render json: recipe
        else
            render json: recipe.errors, status: :unprocessable_entity
        end
    end

    def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
        render json: ("The recipe was deleted.")
    end

end
