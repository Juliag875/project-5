class CustomersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: Review.all, status: :ok
  end

  #SignUp
  def create
    customer = Customer.create!(customer_params)
    session[:customer_id] = customer.id
    render json: customer, status: :created
  end

  private
  
  def user_params
    params.permit(:name, :email, :username, :password, :password_confirmation)
  end

  
end
