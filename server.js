const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto')
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const axios = require('axios'); // using Axios library

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
app.post('/alfamaret',async(req,res) => {
  const {price,dataCart} = req.body
  var apiKey = "DEV-5pmcifJLXAPQivsHR3Ec4vG7w3UrxCdRfOywhyEB";
  var privateKey = "mRnB2-lGAev-nwHAc-aGjsL-uaFDq";

  var merchant_code = "T0712";
  var merchant_ref = "INV345675";
  var amount = price;

  var expiry = parseInt(Math.floor(new Date() / 1000) + (24 * 60 * 60));
  console.log(expiry)
  var signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');
  console.log({price,dataCart})

  var payload = {
    'method': 'ALFAMART',
    'merchant_ref': merchant_ref,
    'amount': amount,
    'customer_name': 'Nama Pelanggan',
    'customer_email': 'emailpelanggan@domain.com',
    'customer_phone': '081234567890',
    'order_items': dataCart,
    'callback_url': 'https://domainanda.com/callback',
    'return_url': 'https://domainanda.com/redirect',
    'expired_time': expiry,
    'signature': signature
  }

  await axios.post('https://payment.tripay.co.id/api-sandbox/transaction/create', payload, {
      headers: {
        'Authorization': 'Bearer ' + apiKey
      }
    })
    .then((response) => {
      
     
      
    })
    .catch((error) => {
      console.log(error)
    });

  
})