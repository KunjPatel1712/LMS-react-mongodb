const express = require("express");
const LMSroutes = express.Router();
const lmsController = require("../controllers/lms.controller");

// test route
LMSroutes.get("/test", lmsController.test);

LMSroutes.post("/create", lmsController.create);
LMSroutes.get("/getallbook", lmsController.getallBook);
LMSroutes.get("/getbookbyId/:Book_id", lmsController.getbookbyId);
LMSroutes.patch("/updatebookstatus/:Book_id", lmsController.updateBookStatus)
LMSroutes.delete("/delete/:Book_id", lmsController.delete)


module.exports = LMSroutes;
