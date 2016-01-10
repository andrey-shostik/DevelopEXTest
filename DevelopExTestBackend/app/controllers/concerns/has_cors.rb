module HasCors
  extend ActiveSupport::Concern

  included do
    after_filter :set_access_control_headers
  end

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PATCH, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
 end

  def handle_options_request
    head(:ok) if request.request_method == :options
  end
end
