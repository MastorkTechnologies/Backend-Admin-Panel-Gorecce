"use strict";

const fireAdmin = require("firebase-admin");
const db = fireAdmin.firestore();
const {
    EMAIL_FROM,
    SENDGRID_API,
    EMAIL,
  } = require("../config/dev");
  const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SENDGRID_API);

const deleteUser = async (req, res) => {
    try {
        const data=await db.collection("users").doc(req.params.id).get(email);
        const emailData = {
            from: EMAIL_FROM,
            to: "saketmundra2707@gmail.com",
            subject: "Account Deactivated",
            html: ` <p style=text-align:center;>Your Account has been Deactivated</p>
                  <hr />`,
          };
        await sgMail.send(emailData);
        await db.collection("users").doc(req.params.id).delete();
        return res.status(200).send("User Deleted");
    } catch (error) {
        return res.status(400).json(error);
    }
}
const deleteReq=async(req,res)=>{
    try {
        const data=await db.collection("requests").get();
        res.send(data.docs.map(doc => doc.data())) ;   
    } catch (error) {
        return res.status(400).json(error);
    }
}





module.exports = {
    deleteUser,deleteReq
};