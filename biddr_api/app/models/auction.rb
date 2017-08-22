class Auction < ApplicationRecord
  belongs_to :user
  
  has_many :bids, dependent: :destroy
  
  validates :title, :details, presence: true
  validates(:reserve_price, numericality: { greater_than_or_equal_to: 0 })
  
  include AASM
  aasm whiny_transitions: false do
    state :draft, initial: true
    state :published
    state :reserve_met

    event :publish do
      transitions from: :draft, to: :published   #:answered in case of a user deleting an answer
    end

    event :reserved do
      transitions from: :published, to: :reserve_met
    end

  end
end
