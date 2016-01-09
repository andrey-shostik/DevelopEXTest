class ApplicationController < ActionController::API
  include CurrentUser, HasCors, ActionController::Serialization
end
