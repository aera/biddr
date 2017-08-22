class AuctionsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_auction, only: [:show]
  
  def create
    auction = Auction.new(auction_params)
    auction.user = current_user

    if auction.save
      render json: { id: auction.id }
    else
      render json: { error: auction.errors.full_messages }
    end
  end
  
  def show
    render json: @auction
  end
  
  def index
    @auctions = Auction.order(created_at: :desc).includes(:user)
    render json: @auctions
  end
  
  def update
    if @auction.update auction_params
      render json: { id: auction.id }
    else
      render json: { error: auction.errors.full_messages }
    end
  end
  
  def destroy
    if @auction.destroy
      head :ok
    else
      head :bad_request
    end
  end
  
  private
  
  def auction_params
    params.require(:auction).permit(
      :title, 
      :details, 
      :ends_on, 
      :reserve_price
    )
  end

  def find_auction
    @auction = Auction.find(params[:id])
  end
end
