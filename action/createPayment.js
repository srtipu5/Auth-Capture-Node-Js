const bkashConfig = require("../config/bkashConfig.json");
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");
const authHeaders = require("../action/authHeader.js");

const createPayment = async () => {
  console.log("Create Payment API Start !!!");
  try {
    const createResopnse = await fetch(bkashConfig.create_payment_url, {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({
        mode: "0011",
        payerReference: " ",
        callbackURL: bkashConfig.callback_url,
        amount: "1", // amount should be dynamic
        currency: "BDT",
        intent: "authorization",
        merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5), // should be unique number
      }),
    });
    const createResult = await createResopnse.json();
    
    return createResult;
  } catch (e) {
    console.log(e);
  }
};

module.exports = createPayment;
