# Node.js M-Pesa API
**Node.js backend project to intergrate lipa na mpesa express**

## Prerequisites
1. Node.
2. Npm.
3. ES6 knowledge.
4. Safaricom Developer account.

### Pre-Usage

**Check the latest documentation at [Daraja](https://developer.safaricom.co.ke/home) before continuing.**

You need the following before getting to use this library:
1. Consumer Key.
2. Consume Secret
3. Test Credentials *(Optional only for sandbox)*

## Getting Started
After Cloning this project,create a .env file.Didnt push this file to gitHub for obvious security reasons.Haha.
The .env file has the following content: 

````js
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
````
## Testing
Testing needs you to clone this repo.

Run [npm start]

Do a ``post`` request to the endpoint `{your root domain}/stk/push` and watch as the ````magic```` unfolds!!.

