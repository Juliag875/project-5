Rails.application.routes.draw do
  
  resources :customers
  resources :reviews
  resources :orders
  resources :items
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "customers#show" 
  post "/signup", to: "customers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
