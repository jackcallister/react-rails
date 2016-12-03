class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def show
    @message = 'This is a message from Rails'
  end
end
