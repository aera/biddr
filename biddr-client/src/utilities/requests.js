const DOMAIN = 'http://localhost:3000';
const API_PATH = '/';

function getJwt () {
  return window.localStorage.getItem('jwt');
}

const Auction = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/auctions`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/auctions/${id}`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/auctions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
};

const Bid = {
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/bids/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}

const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Auction, Bid, Token };
