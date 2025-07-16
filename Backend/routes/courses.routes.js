import { Router } from "express";
import { addCourse, getCoursesList } from "../controllers/courses.controller.js";
const router=Router()


router.route("/courseslist").get(getCoursesList)
router.route("/addcourse").post(addCourse)


export default router