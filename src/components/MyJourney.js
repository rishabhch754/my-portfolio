import React from "react";
import "./MyJourney.css";

const journeyData = [
    {
        type: "education",
        title: "B.C.A - Gla University",
        year: "2022 - 2025",
        location: "Mathura",
        description:
            "I gained a strong foundation in programming, database management, computer networks, and software development. Learned key technologies like C++, Java, Python, and web development fundamentals, which prepared me for real-world IT challenges.",
    },
    {
        type: "education",
        title: "Intermediate (12th) - SDG Inter college",
        year: "2021 - 2022",
        location: "Mathura",
        description:
            "Completed Higher Secondary education (Commerce stream) with subjects including Accountancy, Business Studies, and Economics.",
    },
    {
        type: "education",
        title: "High School (10th) - SDG Inter college",
        year: "2019 - 2020",
        location: "Mathura",
        description:
            "Completed 10th grade with a focus on core academic subjects, building a solid foundation for further education.",
    },
    {
        type: "experience",
        title: "Intern - Startup Inc.",
        year: "2021 - 2022",
        description: "Built a student portal using MERN stack.",
    },
];

function MyJourney() {
    const educationItems = journeyData.filter(item => item.type === "education");
    const experienceItems = journeyData.filter(item => item.type === "experience");

    return (
        <div id="MyJourney">
            <h3>My Journey</h3>
            <div className="timeline-columns">
                {/* Education Column */}
                <div className="column left">
                    {educationItems.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="dot"></div>
                            <div className="content">
                                <h4>🎓 {item.title}</h4>
                                <p>📅 {item.year} &nbsp; | &nbsp; 📍 {item.location}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Line */}
                <div className="center-line"></div>

                {/* Experience Column */}
                <div className="column right">
                    {experienceItems.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="content">
                                <h4>🎓 {item.title}</h4>
                                <p>📅 {item.year}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyJourney;
