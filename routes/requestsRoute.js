const express = require("express");
const router = express.Router();

const {
    deleteUser,deleteReq,rejectdeac
} = require("../controllers/requests");

router.delete("/delete/:id", deleteUser);
router.delete("/rejectdeac/:id",rejectdeac);
router.get("/deletereq", deleteReq);


module.exports = router;

