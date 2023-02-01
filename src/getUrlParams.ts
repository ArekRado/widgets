export const getUrlParams = () => {
  const search = new URLSearchParams(window.location.search)

  return {
    currency: search.get('currency'),
    currencyBuySell: search.get('currencyBuySell'),

    ticker: search.get('ticker'),
  }
}
