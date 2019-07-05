class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
  #    render "api/users/show"
        render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :price_per_hour, :is_tasker )
  end

end
