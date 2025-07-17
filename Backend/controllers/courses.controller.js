import Course from "../models/courses.model.js"

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
        const { title, description, category, duration, level, syllabus, isPublished, thumbnail } = req.body
        if (!title || !description || !category || !duration || !level || !syllabus || !isPublished || !thumbnail) {
            return res.status(400).json({
                message: "All Fields Are required to add the Course"
            })
        }
        const course ={ 
            title,
            description, 
            category, 
            duration, 
            level, 
            syllabus, 
            isPublished, 
            thumbnail 
        }

        const courseRes=await Course.create(course)
        if(!courseRes){
            return res.status(400).json({
                message:"Course Creation failed"
            })
        }
        return res.status(201).json({
            message:"Courses Created Succesfully",
            data:courseRes
        })

    } catch (error) {
        return res.json(`Error while Adding the course  ${error.message}`)
    }
}

export const deleteCourse=async(req,res)=>{
    try {
        
        const courseId=req.params.id
        
        const course=await Course.findByIdAndDelete(courseId)
        if(!course){
            return res.json("course not available")
        } 
        return res.status(201).json({
            message:"Course Deleted Succesfully"
        })
    } catch (error) {
        return res.json({
            message:`server error while deleteing ${error.message}`
        })
    }
}