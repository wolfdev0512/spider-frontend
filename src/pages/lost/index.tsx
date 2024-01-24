import React from 'react'

import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import axios from 'axios';
import { SERVER_URL } from '../../config';

export const Lost = () => {
  return (
    <PaymentForm
      applicationId="sandbox-sq0idb-nP6eTBYzaPexcBtq9o9l8Q"
      locationId="LEWP2HC84SHQT"
      cardTokenizeResponseReceived={async( token, buyer) =>{
        const response = await axios.post(SERVER_URL+ "/payment", {
          sourceId:token.token
        })
        alert(JSON.stringify(response, null, 2))
      }}
    >
      <CreditCard />
    </PaymentForm>
  )
}
