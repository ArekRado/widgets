export const getUrlParams = () => {
  const search = new URLSearchParams(window.location.search)

  return {
    currency: search.get('currency'),
    ticker: search.get('ticker'),
  }
}
