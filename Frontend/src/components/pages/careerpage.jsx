// src/pages/Careers.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

const Careers = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Manually setting job data
        const manualJobs = [
            {
                id: 1,
                title: "Software Engineer",
                department: "Engineering",
                location: "Noida / Bangalore, India",
                description:
                    "We are looking for passionate software engineers skilled in JavaScript, React, and Node.js to build scalable web applications.",
            },
            {
                id: 2,
                title: "Digital Marketing Specialist",
                department: "Marketing",
                location: "Noida, India",
                description:
                    "Plan and execute digital marketing campaigns, manage SEO/SEM, and run social media ads to grow our brand presence.",
            },
            {
                id: 3,
                title: "Business Development Executive",
                department: "Sales",
                location: "Noida, India",
                description:
                    "Identify and acquire new clients, manage relationships, and help generate business leads for the company.",
            },
        ];

        setJobs(manualJobs);
    }, []);

    // Opens Gmail compose with pre-filled data
    const handleSendResume = (jobTitle) => {
        const email = "hr@scstechnologies.com";
        const subject = `Application for ${jobTitle}`;
        const body = `Hello HR Team,%0D%0A%0D%0AI would like to apply for the position of ${jobTitle}. Please find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]`;

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
            "_blank"
        );
    };

    return (<>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Careers at <span className="text-indigo-600">Scs Technologies</span>
                </h1>
                <p className="text-gray-600 mb-10">
                    Join our team and help us build the future of technology. Explore open
                    positions below and send your resume directly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {job.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-1">
                            Department: <span className="font-medium">{job.department}</span>
                        </p>
                        <p className="text-sm text-gray-500 mb-3">
                            Location: <span className="font-medium">{job.location}</span>
                        </p>
                        <p className="text-gray-600 text-sm mb-4">{job.description}</p>

                        <button
                            onClick={() => handleSendResume(job.title)}
                            className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm hover:bg-green-700"
                        >
                            Send Resume
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default Careers;
