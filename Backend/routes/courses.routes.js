import { Router } from "express";
import { addCourse, deleteCourse, getCourse, getCoursesList } from "../controllers/courses.controller.js";
import { AdminAuth } from "../middlewars/adminAuth.js";
import { upload } from "../utils/multer.js";
const router=Router()

//private routes
router.route("/courseslist").get(getCoursesList)
router.route("/addcourse").post(AdminAuth,upload.single("file"),addCourse)
router.route("/deletecourse/:id").delete(AdminAuth,deleteCourse)
// public routes
router.route("/course/:id").get(getCourse)

export default router