const express = require("express");
const router = express.Router();

const {bkashCallback,checkout,refund,refundStatus,search,confirm} = require('../controller/bkashController.js');
const authCheck = require("../middleware/bkashAuthorization.js");

router.use(authCheck);

router.get("/create",checkout);
router.get("/callback", bkashCallback);
router.get("/confirm/:confirmationType", confirm);
router.get("/search", search);
router.get("/refund", refund);
router.get("/refund-status", refundStatus);

module.exports = router;