module CurrentUser
  extend ActiveSupport::Concern

  def current_user
    @current_user ||= User.find_by(token: params[:token])
  end

  def require_user
    unless current_user
      render json: { message: 'Invalid token' }, status: :unauthorized
    end
  end
end
