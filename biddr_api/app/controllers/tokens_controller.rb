class TokensController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      render json: {
        jwt: encode_token({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name
        })
      }
    else
      head :not_found
    end
  end

  private
  
  def encode_token(payload = {}, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end  
  
end
