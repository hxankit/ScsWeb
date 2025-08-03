import Course from "../models/courses.model.js"
import fs from 'fs';
import path from 'path';
import cloudinary from "../utils/cloudinary.js";
import { getDataUri } from "../utils/dataUri.js";


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

    const file = req.file;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Thumbnail image is required",
      });
    }

    // typeof syllabus === "undefined" || typeof isPublished === "undefined"
    if (
      !title || !description || !category || !duration || !level || !price 
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // let parsedSyllabus = syllabus;
    // if (typeof syllabus === "string") {
    //   try {
    //     parsedSyllabus = JSON.parse(syllabus);
    //     if (!Array.isArray(parsedSyllabus)) throw new Error("Syllabus must be an array");
    //   } catch (err) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Invalid syllabus format. Must be an array of objects.",
    //     });
    //   }
    // }

    const fileUri = getDataUri(file);
    const cloudinaryResponse = await cloudinary.uploader.upload(fileUri.content, {
      folder: "courses"
    });

    const newCourse = await Course.create({
      title,
      description,
      category,
      duration,
      level,
      price,
      isPublished,
      thumbnail: cloudinaryResponse.secure_url
    });
    // syllabus: parsedSyllabus,

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


export const getCourse=async (req,res)=>{
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

    // Delete thumbnail from Cloudinary
    if (course.thumbnail) {
      // Extract public_id from the thumbnail URL
      const urlParts = course.thumbnail.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const publicId = `courses/${fileName.split('.')[0]}`;

      try {
        await cloudinary.uploader.destroy(publicId);
        console.log("Cloudinary thumbnail deleted:", publicId);
      } catch (cloudErr) {
        console.error("Cloudinary deletion error:", cloudErr.message);
      }
    }

    // Delete the course from DB
    await Course.findByIdAndDelete(courseId);

    return res.status(200).json({ message: "Course and thumbnail deleted successfully" });
  } catch (error) {
    console.error("Error while deleting course:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
