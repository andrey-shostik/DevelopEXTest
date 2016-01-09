Rails.application.routes.draw do
  resource :registration, only: :create
  resource :authentication, only: :create
  resource :profile, only: [:show, :update, :destroy]

  resources :projects, except: [:new, :edit] do
    resources :tasks, except: [:new, :edit]
  end
end
