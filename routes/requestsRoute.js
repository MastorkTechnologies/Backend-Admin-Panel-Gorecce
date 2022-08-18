const express = require("express");
const router = express.Router();

const {
    deleteUser,deleteReq
} = require("../controllers/requests");

router.delete("/delete/:id", deleteUser);
router.get("/deletereq", deleteReq);


module.exports = router;

