# Node.js M-Pesa API

**Node.js backend project to intergrate lipa na mpesa express**

## Prerequisites

1. Node.
2. Npm.
3. ES6 knowledge.
4. Safaricom Developer account.
5. MongoDB

### Pre-Usage

**Check the latest documentation at [Daraja](https://developer.safaricom.co.ke/home) before continuing.**

You need the following before getting to use this library:

1. Consumer Key.
2. Consume Secret
3. Test Credentials _(Optional only for sandbox)_

## Getting Started

After Cloning this project,create a .env file.Didnt push this file to gitHub for obvious security reasons.Haha.
The .env file has the following content:

```js
PORT=anything
PASSKEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
SHORTCODE=the correct paybill/till number (174379)
CONSUMERKEY=(consumer key)
CONSUMERSECRET=(consumer secret)
AUTH_URL= [Authentication Api URL]https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
STK_URL= [StkPush APi URL]https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest
PHONE=payer phone number
ACCOUNT=the description of the bill
CALLBACKURL=endpoint to handle the response of the stkPush API
```

## Testing

Testing needs you to clone this repo.

Run [npm start]

Do a `post` request to the endpoint `{your root domain}/stk/push` and watch as the `magic` unfolds!!.

The API return the following data as JSON

```js
{
    "MerchantRequestID": "3380-11104173-1",
    "CheckoutRequestID": "ws_CO_270920211140370898",
    "ResponseCode": "0",
    "ResponseDescription": "Success. Request accepted for processing",
    "CustomerMessage": "Success. Request accepted for processing"
}
```

persists data as below :

```js
{
    "_id":{"$oid":"6151838eb3a3fb2bae5d30f1"},
    "payingPhoneNumber":"254700000000",
    "transationDate":"20210927114045",
    "mpesaReceiptNumber":"PIR2G55OU2",
    "paidAmount":"1",
    "merchantRequestID":"3380-11104173-1",
    "checkoutRequestID":"ws_CO_270920211140370898",
    "__v":0
}
```
