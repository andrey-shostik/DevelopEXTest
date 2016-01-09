class AuthenticationsController < ApplicationController
  skip_before_action :require_user

  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      render json: user, status: :accepted
    else
      render json: { message: 'Invalid email or password' },
             status: :unauthorized
    end
  end
end
