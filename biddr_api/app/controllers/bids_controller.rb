class BidsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    bid = Bid.new(bid_params)
    bid.user = current_user

    if bid.save
      render json: { id: bid.id }
    else
      render json: { error: bid.errors.full_messages }
    end
  end
  
  def destroy
    if @bid.destroy
      head :ok
    else
      head :bad_request
    end
  end
  
  private
  
  def bid_params
    params.require(:bid).permit(:bid_amount, :auction_id)
  end
end
