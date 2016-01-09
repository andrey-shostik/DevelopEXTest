Rails.application.routes.draw do
  match '*path', controller: 'application', action: 'handle_options_request', via: :options

  resource :registration, only: :create
  resource :authentication, only: :create
  resource :profile, only: [:show, :update, :destroy]

  resources :projects, except: [:new, :edit] do
    resources :tasks, except: [:new, :edit]
  end
end
