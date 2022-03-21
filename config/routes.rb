Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
		resources :tasks, only: [:index, :show, :create, :update, :destroy]
		resources :categories, only: [:index, :show]
    resources :messages, only: [:index, :show, :create, :update, :destroy]
	end
  
  root "static_pages#root"
end
