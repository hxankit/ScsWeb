import express from "express";
import { contactDetails, testApi } from "../controllers/contact.controller.js";
const router =express.Router();

router.route("/contact").post(contactDetails)
router.route("/test").get(testApi)

export default router
