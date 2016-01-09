class ApplicationController < ActionController::API
  include CurrentUser, ActionController::Serialization
end
