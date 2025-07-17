import { Router } from "express";
import { addCourse, deleteCourse, getCoursesList } from "../controllers/courses.controller.js";
import { AdminAuth } from "../middlewars/adminAuth.js";
const router=Router()


router.route("/courseslist").get(getCoursesList)
router.route("/addcourse").post(AdminAuth,addCourse)
router.route("/deletecourse/:id").post(AdminAuth,deleteCourse)


export default router