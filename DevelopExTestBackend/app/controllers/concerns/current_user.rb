module CurrentUser
  extend ActiveSupport::Concern

  included do
    before_action :require_user
  end

  def current_user
    User.find_by(token: params[:token])
  end

  def require_user
    unless current_user
      render json: { message: 'Invalid token' }, status: :unauthorized
    end
  end
end
