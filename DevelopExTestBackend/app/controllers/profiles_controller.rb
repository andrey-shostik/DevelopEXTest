class ProfilesController < ApplicationController
  before_action :require_user

  def show
    render json: current_user
  end

  def update
    if current_user.update(profile_params)
      render json: current_user, status: :accepted
    else
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: current_user.destroy, status: :accepted
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :last_name)
  end
end
