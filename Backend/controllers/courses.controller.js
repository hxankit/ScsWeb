import Course from "../models/courses.model.js"
import fs from 'fs';
import path from 'path';

export const getCoursesList = async (req, res) => {
   try {
    
    const courseData=await Course.find()
    if(!courseData){
        return res.status(400).json("Courses Not Available")
    }
    return res.status(200).json({
        message:"Courses Fetched succesfully",
        data:courseData
    })
    return res.json("Working Courses controller")
   } catch (error) {
    return res.json(`Error while getting the course list ${error.message}`)
   }
}
export const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      duration,
      level,
      price,
      syllabus,
      isPublished
    } = req.body;

    // Check for uploaded file
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Thumbnail image is required",
      });
    }

    // Validate required fields
    if (
      !title || !description || !category || !duration || !level || !price ||
      typeof syllabus === "undefined" || typeof isPublished === "undefined"
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Parse syllabus if sent as a string (e.g., from Postman or frontend)
    let parsedSyllabus = syllabus;
    if (typeof syllabus === "string") {
      try {
        parsedSyllabus = JSON.parse(syllabus);
        if (!Array.isArray(parsedSyllabus)) throw new Error("Syllabus must be an array");
      } catch (parseErr) {
        return res.status(400).json({
          success: false,
          message: "Invalid syllabus format. Must be an array of objects.",
        });
      }
    }

    // Build course object
    const newCourse = await Course.create({
      title,
      description,
      category,
      duration,
      level,
      price,
      isPublished,
      syllabus: parsedSyllabus,
      thumbnail: `/uploads/thumbnails/${file.filename}`
    });

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse
    });

  } catch (error) {
    console.error("Error while adding course:", error);
    return res.status(500).json({
      success: false,
      message: `Error while adding course: ${error.message}`,
    });
  }
};
export const getCourseList=async (req,res)=>{
    try {
        const courseId=req.params.id
        const course=await Course.findById(courseId)
        if (!course) {
            return res.json({
                message:"Course Not found"
            })
            
        }
        return res.status(200).json({
            message:"Courses get succesfully",
            success:true,
            data:course
    
        })
    } catch (error) {
        return res.json("error while getting the post")
    }

}
export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Delete thumbnail from filesystem
    if (course.thumbnail) {
      const imagePath = path.join('Backend/', course.thumbnail);

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Image deletion error:", err.message);
        } else {
          console.log("Thumbnail deleted:", course.thumbnail);
        }
      });
    }

    // Delete the course from DB
    await Course.findByIdAndDelete(courseId);

    return res.status(200).json({ message: "Course and thumbnail deleted successfully" });
  } catch (error) {
    console.error("Error while deleting course:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};