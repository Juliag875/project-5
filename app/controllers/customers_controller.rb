class CustomersController < ApplicationController 
  # before_action :authorize, only: [:index, :create]

  # GET
  def index
    render json: Customer.all, status: :ok
  end

  # POST - signUp
  def create
    customer = Customer.create!(customer_params)
    session[:customer_id] = customer.id
    render json: customer, status: :created
  end

  # GET /customers/:id
  def show
    customer = Customer.find_by(id: session[:customer_id])
    if customer
      render json: customer, serializer: UserSerializer
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
   end
  end

  private

  def find_customer
    Customer.find(params[:id])
  end
  
  def customer_params
    params.permit(:name, :email, :username, :password, :password_confirmation)
  end

  
