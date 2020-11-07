// CONVERTER 
const cryptos = {
  'bitcoin': 'btc',
  'ethereum': 'eth',
  'litecoin': 'ltc',
  'bitcoin-cash': 'bch',
  'eur': 'eur',
  'usd': 'usd',
}

function selection(id) {
  let selection = document.getElementById(`crypto-${id}`)
  document.getElementById(`selected-${id}`).innerHTML = selection.value
  return selection.value
}

function convert() {
  // get selected cryptos
  crypto_1 = selection('a')
  crypto_2 = selection('b')
    // get data from API from selected crypto
  url = `https://api.coingecko.com/api/v3/coins/${crypto_1}/`
  response_data = fetch_data(url, crypto_1)
    // convert input to new qty
}

function fetch_data(url) {
  fetch(url).then(function(response) {
    // The API call was successful!
    return response.json();
  }).then(function(data) {
    // This is the JSON from our response
    // console.log(data)
    input_a = document.getElementById('input-a')
    input_b = document.getElementById('input-b')
    rate = data.market_data.current_price[cryptos[crypto_2]]
    exchange(input_a, input_b, rate)
  }).catch(function(err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

function exchange(input_a, input_b, rate) {
  input_b.value = (input_a.value * rate).toFixed(2)
  console.log('Rate:')
  console.log(rate)
}

// END CONVERTER


// BALANCE CHECKER

// sample = 1BqWvyV7rsZxrv2Ag1KCpb3WD1P3efgcz
function foo() {
  const api_url = 'https://api.blockcypher.com/v1/btc/main/addrs/'
  value = document.getElementById('input').value
  address = document.getElementById('address')
  address_value = document.getElementById('address-value')
  link = document.getElementById('link')
  address.innerHTML = value
  let call = api_url + value
  address_value.innerHTML = call
  link.href = call

  get_data(call)
}

function get_data(url) {
  result = document.getElementById('result')
  result_BTC = document.getElementById('result_BTC')
  fetch(url).then(function(response) {
    // The API call was successful!
    return response.json();
  }).then(function(data) {
    // This is the JSON from our response
    console.log(data);
    result.innerHTML = data.balance
    result_BTC.innerHTML = data.balance / 100000000
  }).catch(function(err) {
    // There was an error
    console.warn('Something went wrong.', err);
    result.innerHTML = err
  });
}
// END BALANCE CHECKER