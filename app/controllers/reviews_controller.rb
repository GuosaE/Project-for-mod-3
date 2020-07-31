class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end


    def create
        review = Review.new(title: params[:title],
                            author: params[:author], 
                            content: params[:content])
        if review.save
            render json: review          
        else
            render json: review.errors, status: :unprocessable_entity
        end
    end


    def update
        if review.update(title: params[:title], 
            author: params[:author], 
            content: params[:content])
            render json: review
        else
            render json: review.errors, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: ("The review was deleted.")
    end

end
