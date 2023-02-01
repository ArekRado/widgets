import './style.css'

import { getUrlParams } from './getUrlParams'
import { NBPexchangeratesResponse } from './type'
import { setHtml } from './setHtml'

const { ticker, currency } = getUrlParams()

let error: null | { type: string; data: string } = null

if (ticker) {
  // todo
} else if (currency) {
  fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}?format=json`)
    .then((data) => data.json())
    .then((response: NBPexchangeratesResponse) => {
      const data = response?.rates?.[0]

      if (!data || !response) {
        error = {
          type: 'api',
          data: 'wrong api response',
        }
      } else {
        setHtml(`
        <div>
          <div>
            ${response.code}
          </div>
          <div>
            ${data.mid}
          </div>
        </div>
        `)
      }
    })
    .catch((e) => {
      error = {
        type: 'api',
        data: e,
      }
    })
} else {
  error = {
    type: 'input',
    data: 'currency or ticker parameter must be provided. ',
  }
}

if (error) {
  setHtml(error.data)
}
