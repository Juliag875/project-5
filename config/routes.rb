Rails.application.routes.draw do
  
  resources :carts
  resources :customers
  resources :reviews
  resources :orders
  resources :items
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
