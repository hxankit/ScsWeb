import { Router } from "express";
import { adminData, adminLogin, adminLogout } from "../controllers/admin.controller.js";
import { AdminAuth } from "../middlewars/adminAuth.js";
const router =Router()

router.route("/login").post(adminLogin)
router.route("/data").get(AdminAuth,adminData)
router.route("/logout").get(AdminAuth,adminLogout)

export default router 