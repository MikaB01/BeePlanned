Rails.application.routes.draw do

  resources :location do
  end

  resources :hive do
  end

  #get 'location/new'
  devise_for :users, controllers: { sessions: 'users/sessions',
                                              registrations: 'users/registrations',
                                              passwords: 'users/passwords'}

  root 'home#index'
end
