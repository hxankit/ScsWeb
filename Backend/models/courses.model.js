import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Web Development", "Python", "Design", "DevOps", "Others"],
      default: "Others",
    },
    duration: {
      type: String, // e.g., "6 weeks", "3 months"
      required: true,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    price:{
      type:Number,
      required:true
    },
    syllabus: [
      {
        title: String,
        content: String,
      },
    ],
    isPublished: {
      type: Boolean,
      default: false,
    },
    thumbnail: {
      type: String, // URL to course image
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
