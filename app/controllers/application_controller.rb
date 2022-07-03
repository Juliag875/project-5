class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record
  
  # before_action :authorize

  private

  def authorize
    # @current_customer = Customer.find_by(id: session[:customer_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized 
    unless session.include? :customer_id
  end

  def not_found(exception)
    render json: {errors: exception.message}, status: :not_found
    # render json: {"error": "Address not found"}, status: :not_found
    # render json: {errors: "#{error.model} Not Found"}, status: :not_found
  end

  def handle_invalid_record(exception)
    render json: { error: "Item not found" }, status: :unprocessable_entity
  end

  end
end
