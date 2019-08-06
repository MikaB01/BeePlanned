Rails.application.routes.draw do

  get 'perusal/new'
  get 'perusal/show'
  get 'frame/create'
  resources :location do
  end

  resources :hive do
  end

  resources :super do
  end

  resources :frame do
  end

  resources :perusal do
  end

  #get 'location/new'
  devise_for :users, controllers: { sessions: 'users/sessions',
                                              registrations: 'users/registrations',
                                              passwords: 'users/passwords'}

  root 'home#index'
end
