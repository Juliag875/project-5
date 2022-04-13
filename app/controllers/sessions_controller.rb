class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def new
  end
  def create
    # customer = User.find_by(username: params[:username])
    # session[:customer_id] = customer.id
    # render json: customer
    customer = Customer.find_by(username: params[:username])
    if customer && customer.authenticate(params[:password])
      session[:customer_id] = customer.id
      redirect_to root_url, notice: "Logged in!"
    else
      # render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      flash.now[:alert] = "Username or password is invalid"
      render "new"
    end
  end

  def destroy 
    session.delete :customer_id
    head :no_content, notice: "Logged out!"
  end

end
