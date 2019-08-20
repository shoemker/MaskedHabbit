class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
    )


		if @user
      login(@user)
      render "api/users/show"
		elsif params[:user][:username].length == 0
			render json: ["username can't be blank"], status: 401	
		elsif params[:user][:password].length == 0
			render json: ["password can't be blank"], status: 401	
		elsif params[:user][:password].length < 6 
			render json: ["password must be at least 6 chars"], status: 401
		else			
			render json: ["Invalid Username or Password"], status: 401
		end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Logout failed"], status: 404
    end
  end
end

