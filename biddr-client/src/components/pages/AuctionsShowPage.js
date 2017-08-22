import React, {Component} from 'react';
import {Auction} from '../../utilities/requests';
import AuctionDetails from '../AuctionDetails';
import {Bid} from '../../utilities/requests';

class AuctionsShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      auction: {}
    };
  }

  componentDidMount () {
    const {id} = this.props.match.params;

    Auction
      .get(id)
      .then(auction => this.setState({auction}));
  }

  render () {
    return (
      <div className='AuctionsShowPage'>
        <AuctionDetails history={this.props.history} {...this.state.auction} />
      </div>
    );
  }
}

export default AuctionsShowPage;
