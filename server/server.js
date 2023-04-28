
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Stripe = require('stripe')(process.env.SECRET_KEY);
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, error => {
  if (error) throw error;
  console.log('Your server is running on port 5000');
});

app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  console.log(token)
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'inr',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});