const createPayment = require("../action/createPayment.js");
const executePayment = require("../action/executePayment.js");
const confirmPayment = require("../action/confirmPayment");
const searchTransaction = require("../action/searchTransaction.js");
const refundTransaction = require("../action/refundTransaction.js");

const checkout = async (req, res) => {
  try {
    const createResult = await createPayment();
    res.redirect(createResult.bkashURL);
  } catch (e) {
    console.log(e);
  }
};

const bkashCallback = async (req, res) => {
  try {
    if (req.query.status === "success") {
      res.send(await executePayment(req.query.paymentID));
    } else {
      res.send("Payment " + req.query.status);
    }
  } catch (e) {
    console.log(e);
  }
};

const confirm = async (req, res) => {
  try {
    const confirmationType = req.params.confirmationType;
    const paymentID = req.body.paymentID;
    const confirmResult = await confirmPayment(confirmationType,paymentID);
    res.send(confirmResult);
  } catch (e) {
    console.log(e);
  }
};

const search = async (req, res) => {
  try {
    res.send(await searchTransaction(req.body.trxID));
  } catch (e) {
    console.log(e);
  }
};

const refund = async (req, res) => {
  try {
    res.send(await refundTransaction(req.body));
  } catch (e) {
    console.log(e);
  }
};

const refundStatus = async (req, res) => {
  try {
    res.send(await refundTransaction(req.body));
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  checkout,
  bkashCallback,
  confirm,
  search,
  refund,
  refundStatus
};
