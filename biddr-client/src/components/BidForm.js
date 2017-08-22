import React from 'react';

function BidForm (props) {
  const {auctionId, onSubmit = () => {}} = props;


  const handleSubmit = event => {
    event.preventDefault();
    //console.log("here")
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      bid_amount: formData.get('bid-amount'),
      auction_id: auctionId
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='bid-amount'>Bid Amount</label> <br />
        <input id='bid-amount' name='bid-amount' />
      </div>

      <div>
        <input type='submit' value='Create New Bid'/>
      </div>
    </form>
  );
}

export default BidForm;
