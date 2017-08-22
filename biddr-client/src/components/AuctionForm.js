import React from 'react';

function AuctionForm (props) {
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      title: formData.get('title'),
      details: formData.get('details'),
      ends_on: formData.get('ends-on'),
      reserve_price: formData.get('reserve-price')
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='details'>Details</label> <br />
        <textarea id='details' name='details' />
      </div>
      
      <div>
        <label htmlFor='ends-on'>Ends On</label> <br />
        <input id='ends-on' name='ends-on' type='date' />
      </div>
      
      <div>
        <label htmlFor='reserve-price'>Reserve Price</label> <br />
        <input id='reserve-price' name='reserve-price' />
      </div>

      <div>
        <input type='submit' value='Post New Auction'/>
      </div>
    </form>
  );
}

export default AuctionForm;
