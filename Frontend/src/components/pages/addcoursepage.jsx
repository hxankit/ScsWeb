import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddCourse = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        category: '',
        duration: '',
        level: '',
        price: '',
        isPublished: true,
        syllabus: [{ title: '', content: '' }],
    });

    const [thumbnail, setThumbnail] = useState(null);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSyllabusChange = (index, e) => {
        const newSyllabus = [...course.syllabus];
        newSyllabus[index][e.target.name] = e.target.value;
        setCourse({ ...course, syllabus: newSyllabus });
    };

    const addSyllabus = () => {
        setCourse({ ...course, syllabus: [...course.syllabus, { title: '', content: '' }] });
    };

    const removeSyllabus = (index) => {
        const newSyllabus = course.syllabus.filter((_, i) => i !== index);
        setCourse({ ...course, syllabus: newSyllabus });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', course.title);
            formData.append('description', course.description);
            formData.append('category', course.category);
            formData.append('duration', course.duration);
            formData.append('level', course.level);
            formData.append('price', course.price);
            formData.append('isPublished', course.isPublished);
            formData.append('syllabus', JSON.stringify(course.syllabus));
            if (thumbnail) formData.append('file', thumbnail); // 'file' must match multer field name

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/courses/addcourse`, formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            
            toast.success('✅ Course added successfully!');
            setCourse({
                title: '',
                description: '',
                category: '',
                duration: '',
                level: '',
                price: '',
                isPublished: true,
                syllabus: [{ title: '', content: '' }],
            });
            setThumbnail(null);
        } catch (error) {
            console.error(error.message);
            toast.error('❌ Failed to add course');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">📚 Add New Course</h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="title"
                        placeholder="Course Title"
                        value={course.title}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <select
                        name="category"
                        value={course.category}
                        onChange={handleChange}
                        className="input-field"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Python">Python</option>
                        <option value="Design">Design</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Others">Others</option>
                    </select>

                    <input
                        name="duration"
                        placeholder="Duration (e.g., 6 weeks)"
                        value={course.duration}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <select
                        name="level"
                        value={course.level}
                        onChange={handleChange}
                        className="input-field"
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <input
                        name="price"
                        placeholder="Price ($)"
                        value={course.price}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />

                    <input
                        type="file"
                        name="thumbnail"
                        accept="image/*"
                        onChange={(e) => setThumbnail(e.target.files[0])}
                        className="input-field"
                        required
                    />
                </div>

                <textarea
                    name="description"
                    placeholder="Course Description"
                    value={course.description}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    required
                />

                <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">📘 Syllabus</h3>
                    {course.syllabus.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                            <input
                                type="text"
                                name="title"
                                placeholder={`Week ${index + 1} Title`}
                                value={item.title}
                                onChange={(e) => handleSyllabusChange(index, e)}
                                className="input-field"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="Content"
                                    value={item.content}
                                    onChange={(e) => handleSyllabusChange(index, e)}
                                    className="input-field flex-1"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSyllabus(index)}
                                    className="px-3 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded"
                                    title="Remove Week"
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addSyllabus}
                        className="mt-2 inline-block px-4 py-2 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-all"
                    >
                        ➕ Add Week
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all"
                >
                    🚀 Create Course
                </button>
            </form>
        </div>
    );
};

export default AddCourse;
