class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password, :password_confirmation
end
