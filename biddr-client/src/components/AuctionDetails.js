import React from 'react';
import { Bid } from '../utilities/requests';
import BidForm from './BidForm';


function AuctionDetails (props) {
  const {id, title, details, bids = [], history, author = {}} = props;

  const createBid = function(bid) {
    Bid
      .post(bid)
      .then(({bid}) => history.push(`/auctions/${id}`));
  }

  return (
    <div className='AuctionDetails'>
      <h2>{title}</h2>
      <p>{details}</p>
      <p><em>Posted by {author.first_name} {author.last_name}</em></p>
      <h3>Bids</h3>
      <ul className='BidList'>
        {
          bids.map(
            bid => (
              <li key={bid.id}>
                {bid.bid_amount} at {bid.created_at}
              </li>
            )
          )
        }
      </ul>
      <div className='BidsNewPage'>
        <h4>New Bid</h4>
        <BidForm auctionId={id} onSubmit={createBid} />
      </div>
    </div>
  )
}

export default AuctionDetails;
