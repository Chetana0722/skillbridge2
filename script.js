function createProfile() {

    // Get the information entered by the student
    const name = document.getElementById("studentName").value;
    const branch = document.getElementById("branch").value;
    const skills = document.getElementById("skills").value;
    const career = document.getElementById("career").value;

    // Check whether all fields are filled
    if (name === "" || branch === "" || skills === "" || career === "") {
        alert("Please fill all the details.");
        return;
    }

    // Show the profile
    const result = document.getElementById("profileResult");

    result.innerHTML = `
        <h3>🎉 Profile Created Successfully!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Branch:</strong> ${branch}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Career Interest:</strong> ${career}</p>
    `;

    // Scroll to the result
    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function analyzeSkills() {

    const skills = document.getElementById("skills").value.toLowerCase();
    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    let requiredSkills = [];

    if (career === "Web Development") {
        requiredSkills = ["html", "css", "javascript"];
    }
    else if (career === "Data Science") {
        requiredSkills = ["python", "sql", "statistics"];
    }
    else if (career === "Artificial Intelligence") {
        requiredSkills = ["python", "machine learning", "statistics"];
    }
    else if (career === "Cyber Security") {
        requiredSkills = ["networking", "linux", "cyber security"];
    }
    else if (career === "Software Development") {
        requiredSkills = ["python", "java", "git"];
    }

    let learned = [];
    let missing = [];

    requiredSkills.forEach(function(skill) {

        if (skills.includes(skill)) {
            learned.push(skill);
        } else {
            missing.push(skill);
        }

    });

    let percentage = 0;

    if (requiredSkills.length > 0) {
        percentage = Math.round(
            (learned.length / requiredSkills.length) * 100
        );
    }

    result.innerHTML += `
        <hr>
        <h3>📊 Skill Gap Analysis</h3>

        <p><strong>Career:</strong> ${career}</p>

        <p><strong>Skill Match:</strong> ${percentage}%</p>

        <p><strong>✅ Skills You Have:</strong>
        ${learned.length ? learned.join(", ") : "None yet"}
        </p>

        <p><strong>⚠️ Skills To Learn:</strong>
        ${missing.length ? missing.join(", ") : "Great! You have all required skills."}
        </p>
    `;
}
function recommendCareer() {

    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    let recommendation = "";

    if (career === "Web Development") {
        recommendation = `
            <h3>🎯 Recommended Career</h3>
            <p><strong>Web Developer</strong></p>
            <p>Build websites and web applications using HTML, CSS and JavaScript.</p>
        `;
    }

    else if (career === "Data Science") {
        recommendation = `
            <h3>🎯 Recommended Career</h3>
            <p><strong>Data Scientist</strong></p>
            <p>Work with data, statistics, Python and machine learning.</p>
        `;
    }

    else if (career === "Artificial Intelligence") {
        recommendation = `
            <h3>🎯 Recommended Career</h3>
            <p><strong>AI / Machine Learning Engineer</strong></p>
            <p>Develop intelligent systems using Python and machine learning.</p>
        `;
    }

    else if (career === "Cyber Security") {
        recommendation = `
            <h3>🎯 Recommended Career</h3>
            <p><strong>Cyber Security Analyst</strong></p>
            <p>Help protect computers, networks and data from cyber threats.</p>
        `;
    }

    else if (career === "Software Development") {
        recommendation = `
            <h3>🎯 Recommended Career</h3>
            <p><strong>Software Developer</strong></p>
            <p>Design, develop and maintain software applications.</p>
        `;
    }

    else {
        recommendation = `
            <h3>⚠️ Select a Career Interest</h3>
            <p>Please select your career interest first.</p>
        `;
    }

    result.innerHTML += recommendation;
}
function showRoadmap() {

    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    let roadmap = "";

    if (career === "Web Development") {
        roadmap = `
            <hr>
            <h3>📚 Your Learning Roadmap</h3>
            <p>1️⃣ Learn HTML</p>
            <p>2️⃣ Learn CSS</p>
            <p>3️⃣ Learn JavaScript</p>
            <p>4️⃣ Build a website project</p>
        `;
    }

    else if (career === "Data Science") {
        roadmap = `
            <hr>
            <h3>📚 Your Learning Roadmap</h3>
            <p>1️⃣ Learn Python</p>
            <p>2️⃣ Learn Statistics</p>
            <p>3️⃣ Learn SQL</p>
            <p>4️⃣ Build a data analysis project</p>
        `;
    }

    else if (career === "Artificial Intelligence") {
        roadmap = `
            <hr>
            <h3>📚 Your Learning Roadmap</h3>
            <p>1️⃣ Learn Python</p>
            <p>2️⃣ Learn Statistics</p>
            <p>3️⃣ Learn Machine Learning</p>
            <p>4️⃣ Build an AI project</p>
        `;
    }

    else if (career === "Cyber Security") {
        roadmap = `
            <hr>
            <h3>📚 Your Learning Roadmap</h3>
            <p>1️⃣ Learn Networking</p>
            <p>2️⃣ Learn Linux</p>
            <p>3️⃣ Learn Cyber Security basics</p>
            <p>4️⃣ Practice with security projects</p>
        `;
    }

    else if (career === "Software Development") {
        roadmap = `
            <hr>
            <h3>📚 Your Learning Roadmap</h3>
            <p>1️⃣ Learn Programming</p>
            <p>2️⃣ Learn Java or Python</p>
            <p>3️⃣ Learn Git</p>
            <p>4️⃣ Build software projects</p>
        `;
    }

    else {
        roadmap = `
            <hr>
            <h3>⚠️ Select a Career Interest First</h3>
        `;
    }

    result.innerHTML += roadmap;
}
function showOpportunities() {

    const career = document.getElementById("career").value;
    const result = document.getElementById("opportunityResult");

    let opportunities = "";

    if (career === "Web Development") {
        opportunities = `
            <h3>🚀 Recommended Opportunities</h3>
            <p>💼 Web Development Internships</p>
            <p>🎓 HTML, CSS & JavaScript Courses</p>
            <p>🏆 Web Development Competitions</p>
            <p>🛠️ Build a Personal Portfolio Website</p>
        `;
    }

    else if (career === "Data Science") {
        opportunities = `
            <h3>🚀 Recommended Opportunities</h3>
            <p>💼 Data Science Internships</p>
            <p>🎓 Python & Data Science Courses</p>
            <p>🏆 Data Analytics Competitions</p>
            <p>🛠️ Build a Data Analysis Project</p>
        `;
    }

    else if (career === "Artificial Intelligence") {
        opportunities = `
            <h3>🚀 Recommended Opportunities</h3>
            <p>💼 AI / ML Internships</p>
            <p>🎓 Machine Learning Courses</p>
            <p>🏆 AI Hackathons</p>
            <p>🛠️ Build an AI Project</p>
        `;
    }

    else if (career === "Cyber Security") {
        opportunities = `
            <h3>🚀 Recommended Opportunities</h3>
            <p>💼 Cyber Security Internships</p>
            <p>🎓 Cyber Security Certifications</p>
            <p>🏆 Cyber Security Competitions</p>
            <p>🛠️ Build a Cyber Security Project</p>
        `;
    }

    else if (career === "Software Development") {
        opportunities = `
            <h3>🚀 Recommended Opportunities</h3>
            <p>💼 Software Development Internships</p>
            <p>🎓 Programming Courses</p>
            <p>🏆 Coding Competitions</p>
            <p>🛠️ Build a Software Project</p>
        `;
    }

    else {
        opportunities = `
            <h3>⚠️ Select a Career Interest First</h3>
        `;
    }

    result.innerHTML = opportunities;
}
function showOpportunities() {

    const result = document.getElementById("opportunityResult");

    result.innerHTML = `
        <h3>🌟 Opportunities for You</h3>
        <p>Based on your interests, you can explore:</p>

        <ul>
            <li>🎓 Online courses and certifications</li>
            <li>💼 Internships and projects</li>
            <li>🏆 Hackathons and competitions</li>
            <li>🚀 Career development programs</li>
        </ul>
    `;
}
function showCourses() {
    const result = document.getElementById("opportunityResult");

    result.innerHTML = `
        <h3>🎓 Recommended Online Courses</h3>
        <ul>
            <li>HTML & CSS Web Development</li>
            <li>JavaScript Fundamentals</li>
            <li>Python Programming</li>
            <li>Data Science Basics</li>
            <li>Artificial Intelligence Fundamentals</li>
        </ul>
    `;
}

function showInternships() {
    const result = document.getElementById("opportunityResult");

    result.innerHTML = `
        <h3>💼 Internship Opportunities</h3>
        <ul>
            <li>Web Development Internship</li>
            <li>Python Development Internship</li>
            <li>Data Science Internship</li>
            <li>AI & Machine Learning Internship</li>
            <li>Software Development Internship</li>
        </ul>
    `;
}

function showCompetitions() {
    const result = document.getElementById("opportunityResult");

    result.innerHTML = `
        <h3>🏆 Competitions & Hackathons</h3>
        <ul>
            <li>College Hackathons</li>
            <li>Web Development Challenges</li>
            <li>AI & ML Competitions</li>
            <li>Coding Competitions</li>
            <li>Innovation Challenges</li>
        </ul>
    `;
}function recommendCareer() {
    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    if (career === "") {
        result.innerHTML = "<p>Please select your career interest first.</p>";
        return;
    }

    let recommendation = "";

    if (career === "Web Development") {
        recommendation = `
            <h3>🎯 Career Recommendation</h3>
            <p><strong>Web Developer</strong></p>
            <p>Recommended skills: HTML, CSS, JavaScript, React</p>
        `;
    } 
    else if (career === "Data Science") {
        recommendation = `
            <h3>🎯 Career Recommendation</h3>
            <p><strong>Data Scientist</strong></p>
            <p>Recommended skills: Python, SQL, Statistics, Machine Learning</p>
        `;
    } 
    else if (career === "Artificial Intelligence") {
        recommendation = `
            <h3>🎯 Career Recommendation</h3>
            <p><strong>AI / Machine Learning Engineer</strong></p>
            <p>Recommended skills: Python, Machine Learning, Deep Learning</p>
        `;
    } 
    else if (career === "Cyber Security") {
        recommendation = `
            <h3>🎯 Career Recommendation</h3>
            <p><strong>Cyber Security Analyst</strong></p>
            <p>Recommended skills: Networking, Linux, Security Fundamentals</p>
        `;
    } 
    else if (career === "Software Development") {
        recommendation = `
            <h3>🎯 Career Recommendation</h3>
            <p><strong>Software Developer</strong></p>
            <p>Recommended skills: Programming, Data Structures, Databases</p>
        `;
    }

    result.innerHTML = recommendation;
}
function analyzeSkills() {

    const skillsInput = document.getElementById("skills").value.toLowerCase();
    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    if (skillsInput === "" || career === "") {
        result.innerHTML = "<p>⚠️ Please enter your skills and select a career interest first.</p>";
        return;
    }

    const skills = skillsInput.split(",").map(skill => skill.trim());

    const requiredSkills = {
        "Web Development": ["html", "css", "javascript", "react"],
        "Data Science": ["python", "sql", "statistics", "machine learning"],
        "Artificial Intelligence": ["python", "machine learning", "deep learning"],
        "Cyber Security": ["networking", "linux", "cyber security"],
        "Software Development": ["programming", "data structures", "database"]
    };

    const required = requiredSkills[career];

    const have = required.filter(skill => skills.includes(skill));
    const missing = required.filter(skill => !skills.includes(skill));

    result.innerHTML = `
        <h3>🧠 Skill Gap Analysis</h3>

        <p><strong>Career:</strong> ${career}</p>

        <h4>✅ Skills You Have</h4>
        <p>${have.length ? have.join(", ") : "No matching skills found"}</p>

        <h4>⚠️ Skills You Need</h4>
        <p>${missing.length ? missing.join(", ") : "Great! You have all the required skills."}</p>

        <p><strong>Skill Match:</strong> ${Math.round((have.length / required.length) * 100)}%</p>
    `;
}
function showRoadmap() {

    const career = document.getElementById("career").value;
    const result = document.getElementById("profileResult");

    if (career === "") {
        result.innerHTML = "<p>⚠️ Please select a career interest first.</p>";
        return;
    }

    const roadmaps = {
        "Web Development": [
            "Learn HTML & CSS",
            "Learn JavaScript",
            "Learn Git & GitHub",
            "Learn React",
            "Build real-world projects"
        ],

        "Data Science": [
            "Learn Python",
            "Learn Statistics",
            "Learn SQL",
            "Learn Data Visualization",
            "Learn Machine Learning",
            "Build data science projects"
        ],

        "Artificial Intelligence": [
            "Learn Python",
            "Learn Mathematics & Statistics",
            "Learn Machine Learning",
            "Learn Deep Learning",
            "Learn NLP / Computer Vision",
            "Build AI projects"
        ],

        "Cyber Security": [
            "Learn Computer Networks",
            "Learn Linux",
            "Learn Cyber Security Fundamentals",
            "Learn Ethical Security Concepts",
            "Practice Security Labs",
            "Build security projects"
        ],

        "Software Development": [
            "Learn Programming",
            "Learn Data Structures & Algorithms",
            "Learn Object-Oriented Programming",
            "Learn Databases",
            "Learn Git & GitHub",
            "Build software projects"
        ]
    };

    const roadmap = roadmaps[career];

    result.innerHTML = `
        <h3>📚 Your Learning Roadmap</h3>
        <p><strong>Career:</strong> ${career}</p>

        <ol>
            ${roadmap.map(step => `<li>${step}</li>`).join("")}
        </ol>

        <p>🚀 Follow these steps and build projects along the way.</p>
    `;
}