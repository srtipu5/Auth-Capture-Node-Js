const bkashConfig = require("../config/bkashConfig.json");
const fetch = require("node-fetch");
const authHeaders = require("../action/authHeader.js");

const confirmPayment = async (confirmationType,paymentID) => {
  console.log("Confirm Payment API Start !!!");
  const confirmResponse = await fetch(bkashConfig.confirm_payment_url + confirmationType, {
    method: "POST",
    headers: await authHeaders(),
    body: JSON.stringify({
      paymentID,
    }),
  });
  const confirmResult = await confirmResponse.json();
  return confirmResult;
};

module.exports = confirmPayment;
