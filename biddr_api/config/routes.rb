Rails.application.routes.draw do
  defaults  format: :json  do
    
    resources :auctions, only: [:index, :show, :create, :update]
    resources :bids, only: [:create]
    resource :tokens, only: [:create]

  end
end
