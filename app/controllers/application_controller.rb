class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # before_action :authorize

  private

  def authorize
    @current_customer = Customer.find_by(id: session[:customer_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_customer
  end

  def not_found(exception)
    render json: {errors: exception.message}, status: :not_found
    # render json: {"error": "Address not found"}, status: :not_found
    # render json: {errors: "#{error.model} Not Found"}, status: :not_found
  end

  def unprocessable_entity(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  end
