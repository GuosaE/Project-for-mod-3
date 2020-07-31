Rails.application.routes.draw do
  resources :reviews, only:[:index, :show, :create, :update, :destroy]
  resources :cuisines, only:[:index]
  resources :recipes, only:[:index, :show, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
