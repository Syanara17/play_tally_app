  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
  get 'sessions/new'

    root 'static_pages#home'
    get  '/help',    to: 'static_pages#help'
    get  '/about',   to: 'static_pages#about'
    get  '/contact', to: 'static_pages#contact'
    get  '/signup',  to: 'users#new'
    get  '/newgame',  to: 'games#new'
    get  '/games/plays', to: 'games#get_plays'
    post '/games/new',  to: 'games#create'
    patch '/newgame/:id',  to: 'games#update'
    patch '/games/:id(.:format)',  to:'games#update', as: 'update_game'
    post '/savegame', to: 'games#save'
    post '/signup',  to: 'users#create'
    get  '/login',    to: 'sessions#new'
    post '/login',    to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
    resources :users
    resources :games
  end

