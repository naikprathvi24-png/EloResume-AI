console.log("ELORESUME SCRIPT LOADED");
/* =========================================
   DYNAMIC EDUCATION
========================================= */

function addEducation() {

    const container =
        document.getElementById("education-container");

    const entries =
        container.querySelectorAll(".education-entry");

    const number =
        entries.length + 1;

    const entry =
        document.createElement("div");

    entry.className =
        "dynamic-entry education-entry";

    entry.innerHTML = `

        <div class="dynamic-entry-header">

            <h3>
                Education ${number}
            </h3>

            <button
                type="button"
                class="remove-entry"
                onclick="removeEntry(this)">

                Remove

            </button>

        </div>


        <div class="form-grid">

            <div class="form-group">

                <label>
                    Degree / Qualification
                </label>

                <input
                    type="text"
                    name="education_degree[]"
                    placeholder="Example: BCA"
                >

            </div>


            <div class="form-group">

                <label>
                    Institution
                </label>

                <input
                    type="text"
                    name="education_institution[]"
                    placeholder="Example: ABC College"
                >

            </div>


            <div class="form-group">

                <label>
                    Start Year
                </label>

                <input
                    type="text"
                    name="education_start[]"
                    placeholder="Example: 2024"
                >

            </div>


            <div class="form-group">

                <label>
                    End Year
                </label>

                <input
                    type="text"
                    name="education_end[]"
                    placeholder="Example: 2027"
                >

            </div>


            <div class="form-group full-width">

                <label>
                    Percentage / CGPA
                </label>

                <input
                    type="text"
                    name="education_score[]"
                    placeholder="Example: 85% or 8.5 CGPA"
                >

            </div>

        </div>
    `;

    container.appendChild(entry);
}


function removeEntry(button) {

    const entry =
        button.closest(".dynamic-entry");

    if (entry) {

        entry.remove();

    }

}
/* =========================================
   DYNAMIC PROJECTS
========================================= */

function addProject() {

    const container = document.getElementById(
        "projects-container"
    );

    if (!container) {
        return;
    }

    const projectNumber =
        container.querySelectorAll(
            ".project-entry"
        ).length + 1;

    const projectEntry =
        document.createElement("div");

    projectEntry.className =
        "dynamic-entry project-entry";

    projectEntry.innerHTML = `

        <div class="dynamic-entry-header">

            <h3>
                Project ${projectNumber}
            </h3>

            <button
                type="button"
                class="remove-entry"
                onclick="removeEntry(this)">
                Remove
            </button>

        </div>

        <div class="form-grid">

            <div class="form-group">

                <label>
                    Project Name
                </label>

                <input
                    type="text"
                    name="project_name[]"
                    placeholder="Example: AI Notes Summarizer">

            </div>

            <div class="form-group">

                <label>
                    Technologies
                </label>

                <input
                    type="text"
                    name="project_technologies[]"
                    placeholder="Example: Python, Flask, SQLite">

            </div>

            <div class="form-group full-width">

                <label>
                    Project Description
                </label>

                <textarea
                    name="project_description[]"
                    rows="5"
                    placeholder="Describe what you built, what problem it solves, and your contribution."></textarea>

                <button
                    type="button"
                    class="ai-generate-button"
                    onclick="generateProjectDescriptionWithAI(this)">
                    ✨ Generate with AI
                </button>

                <p
                    class="ai-status project-ai-status">
                </p>

            </div>

        </div>
    `;

    container.appendChild(projectEntry);
}
/* =========================================
   DYNAMIC INTERNSHIPS
========================================= */

function addInternship() {

    const container =
        document.getElementById("internship-container");

    const entries =
        container.querySelectorAll(".internship-entry");

    const number =
        entries.length + 1;

    const entry =
        document.createElement("div");

    entry.className =
        "dynamic-entry internship-entry";

    entry.innerHTML = `

        <div class="dynamic-entry-header">

            <h3>
                Internship ${number}
            </h3>

            <button
                type="button"
                class="remove-entry"
                onclick="removeEntry(this)">

                Remove

            </button>

        </div>


        <div class="form-grid">

            <div class="form-group">

                <label>
                    Company / Organization
                </label>

                <input
                    type="text"
                    name="internship_company[]"
                    placeholder="Example: ABC Technologies">

            </div>


            <div class="form-group">

                <label>
                    Role / Position
                </label>

                <input
                    type="text"
                    name="internship_role[]"
                    placeholder="Example: Python Intern">

            </div>


            <div class="form-group">

                <label>
                    Start Date
                </label>

                <input
                    type="text"
                    name="internship_start[]"
                    placeholder="Example: June 2026">

            </div>


            <div class="form-group">

                <label>
                    End Date
                </label>

                <input
                    type="text"
                    name="internship_end[]"
                    placeholder="Example: August 2026">

            </div>


            <div class="form-group full-width">

                <label>
                    Description
                </label>

                <textarea
                    name="internship_description[]"
                    rows="5"
                    placeholder="Describe your responsibilities, work, and achievements."></textarea>

            </div>

        </div>
    `;

    container.appendChild(entry);
}


/* =========================================
   DYNAMIC WORK EXPERIENCE
========================================= */

function addExperience() {

    const container =
        document.getElementById("experience-container");

    const entries =
        container.querySelectorAll(".experience-entry");

    const number =
        entries.length + 1;

    const entry =
        document.createElement("div");

    entry.className =
        "dynamic-entry experience-entry";

    entry.innerHTML = `

        <div class="dynamic-entry-header">

            <h3>
                Experience ${number}
            </h3>

            <button
                type="button"
                class="remove-entry"
                onclick="removeEntry(this)">

                Remove

            </button>

        </div>


        <div class="form-grid">

            <div class="form-group">

                <label>
                    Company
                </label>

                <input
                    type="text"
                    name="experience_company[]"
                    placeholder="Example: XYZ Technologies">

            </div>


            <div class="form-group">

                <label>
                    Job Title / Role
                </label>

                <input
                    type="text"
                    name="experience_role[]"
                    placeholder="Example: Software Developer">

            </div>


            <div class="form-group">

                <label>
                    Start Date
                </label>

                <input
                    type="text"
                    name="experience_start[]"
                    placeholder="Example: January 2025">

            </div>


            <div class="form-group">

                <label>
                    End Date
                </label>

                <input
                    type="text"
                    name="experience_end[]"
                    placeholder="Example: Present">

            </div>


            <div class="form-group full-width">

                <label>
                    Description
                </label>

                <textarea
                    name="experience_description[]"
                    rows="5"
                    placeholder="Describe your responsibilities, achievements, and contributions."></textarea>

            </div>

        </div>
    `;

    container.appendChild(entry);
}
async function generateSummaryWithAI() {

    const summaryBox = document.querySelector(
        'textarea[name="summary"]'
    );

    const status = document.getElementById(
        "ai-summary-status"
    );

    if (!summaryBox) {
        return;
    }

    status.textContent = "✨ Generating with AI...";

    const name = document.querySelector(
        'input[name="full_name"]'
    )?.value || "";

    const title = document.querySelector(
        'input[name="professional_title"]'
    )?.value || "";

    const skills = document.querySelector(
        'textarea[name="skills"]'
    )?.value || "";

    const prompt = `
Write a professional resume summary.

Candidate name: ${name}
Professional title: ${title}
Skills: ${skills}

Requirements:
- Write 3 to 4 sentences.
- Use professional resume language.
- Do not invent qualifications or experience.
- Keep it suitable for a job application.
- Return only the summary text.
`;

    try {

        const response = await fetch(
            "/api/ai/generate",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {

            status.textContent =
                data.message ||
                "Unable to generate summary.";

            return;
        }

        summaryBox.value = data.result;

        status.textContent =
            "✓ AI summary generated successfully.";

    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to connect to the AI service.";
    }
}
async function generateCareerObjectiveWithAI() {

    const objectiveBox = document.querySelector(
        'textarea[name="career_objective"]'
    );

    const status = document.getElementById(
        "ai-objective-status"
    );

    if (!objectiveBox) {
        return;
    }

    status.textContent = "✨ Generating with AI...";

    const title = document.querySelector(
        'input[name="professional_title"]'
    )?.value || "";

    const skills = document.querySelector(
        'textarea[name="skills"]'
    )?.value || "";

    const education = document.querySelector(
        'textarea[name="summary"]'
    )?.value || "";

    const prompt = `
Write a professional career objective for a resume.

Professional title: ${title}
Skills: ${skills}
Candidate information: ${education}

Requirements:
- Write 2 to 3 sentences.
- Suitable for a fresher job application.
- Professional and clear language.
- Do not invent experience, qualifications, companies, or achievements.
- Focus on skills, learning, contribution, and career growth.
- Return only the career objective.
`;

    try {

        const response = await fetch(
            "/api/ai/generate",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {

            status.textContent =
                data.message ||
                "Unable to generate career objective.";

            return;
        }

        objectiveBox.value = data.result;

        status.textContent =
            "✓ AI career objective generated successfully.";

    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to connect to the AI service.";
    }
}
async function generateProjectDescriptionWithAI(button) {

    const projectEntry = button.closest(".project-entry");

    if (!projectEntry) {
        return;
    }

    const nameBox = projectEntry.querySelector(
        'input[name="project_name[]"]'
    );

    const technologiesBox = projectEntry.querySelector(
        'input[name="project_technologies[]"]'
    );

    const descriptionBox = projectEntry.querySelector(
        'textarea[name="project_description[]"]'
    );

    const status = projectEntry.querySelector(
        ".project-ai-status"
    );

    if (!descriptionBox) {
        return;
    }

    const projectName = nameBox?.value || "";
    const technologies = technologiesBox?.value || "";

    if (!projectName.trim()) {

        status.textContent =
            "Please enter the project name first.";

        return;
    }

    status.textContent =
        "✨ Generating with AI...";

    const prompt = `
Write a professional resume project description.

Project name: ${projectName}

Technologies:
${technologies}

Requirements:
- Write 2 to 4 concise sentences.
- Explain what the project does.
- Mention the technologies used.
- Make it suitable for a professional resume.
- Do not invent features or achievements.
- Return only the project description.
`;

    try {

        const response = await fetch(
            "/api/ai/generate",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {

            status.textContent =
                data.message ||
                "Unable to generate project description.";

            return;
        }

        descriptionBox.value = data.result;

        status.textContent =
            "✓ Project description generated.";

    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to connect to the AI service.";
    }
}
async function suggestSkillsWithAI() {

    const skillsBox = document.querySelector(
        'textarea[name="skills"]'
    );

    const status = document.getElementById(
        "ai-skills-status"
    );

    if (!skillsBox || !status) {
        console.error("Skills box or status element not found.");
        return;
    }

    const title = document.querySelector(
        'input[name="professional_title"]'
    )?.value || "";

    const education = document.querySelector(
        'input[name="education_degree[]"]'
    )?.value || "";

    const currentSkills = skillsBox.value || "";

    status.textContent =
        "✨ Generating skill suggestions...";

    const prompt = `
Suggest professional resume skills for this candidate.

Professional title:
${title}

Education:
${education}

Current skills:
${currentSkills}

Requirements:
- Suggest relevant technical and professional skills.
- Do not invent qualifications or certifications.
- Avoid duplicate skills.
- Keep the suggestions suitable for a resume.
- Return only a simple comma-separated list of skills.
`;

    try {

        const response = await fetch(
            "/api/ai/generate",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );

        const data = await response.json();

        console.log("AI Skills Response:", data);

        if (!response.ok || !data.success) {

            status.textContent =
                data.message ||
                "Unable to generate skill suggestions.";

            return;
        }

        skillsBox.value = data.result;

        status.textContent =
            "✓ Skill suggestions generated successfully.";

    } catch (error) {

        console.error(
            "Skills AI Error:",
            error
        );

        status.textContent =
            "Unable to connect to the AI service.";
    }
}
async function analyzeResumeWithAI() {

    console.log("=================================");
    console.log("AI RESUME ANALYSIS STARTED");
    console.log("=================================");

    const status =
        document.getElementById("ai-review-status");

    const resumePaper =
        document.querySelector(".resume-paper");

    if (!resumePaper) {

        console.error(
            "ERROR: .resume-paper not found"
        );

        if (status) {
            status.textContent =
                "Resume content not found.";
        }

        return;
    }

    const resumeText =
        resumePaper.innerText.trim();

    if (!resumeText) {

        console.error(
            "ERROR: Resume text is empty"
        );

        if (status) {
            status.textContent =
                "Resume content is empty.";
        }

        return;
    }

    if (status) {
        status.textContent =
            "✨ Analyzing your resume with AI...";
    }

    try {

        console.log(
            "Sending request to /api/ai/analyze-resume"
        );

        const response = await fetch(
            "/api/ai/analyze-resume",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    resume_text: resumeText
                })
            }
        );

        console.log(
            "HTTP Status:",
            response.status
        );

        const responseText =
            await response.text();

        console.log(
            "RAW SERVER RESPONSE:",
            responseText
        );

        let data;

        try {

            data =
                JSON.parse(responseText);

        } catch (jsonError) {

            console.error(
                "SERVER DID NOT RETURN JSON:",
                jsonError
            );

            if (status) {
                status.textContent =
                    "Server returned an invalid response.";
            }

            return;
        }

        console.log(
            "PARSED AI RESPONSE:",
            data
        );

        if (!response.ok) {

            console.error(
                "SERVER ERROR:",
                data
            );

            if (status) {
                status.textContent =
                    data.message ||
                    "AI server error.";
            }

            return;
        }

        if (!data.success) {

            console.error(
                "AI REQUEST FAILED:",
                data
            );

            if (status) {
                status.textContent =
                    data.message ||
                    "AI analysis failed.";
            }

            return;
        }

        console.log(
            "AI ANALYSIS SUCCESSFUL"
        );

        if (status) {
            status.textContent =
                "✓ Resume analysis completed.";
        }

        /*
         * Display result
         */

        showAIReviewPopup(
            data.result
        );

    } catch (error) {

        console.error(
            "REAL JAVASCRIPT ERROR:",
            error
        );

        if (status) {
            status.textContent =
                "JavaScript error. Check Console.";
        }
    }
}
function formatAIReview(text) {

    if (!text) {
        return "<p>No AI result received.</p>";
    }

    let html = String(text);

    // Escape HTML
    html = html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Remove Markdown horizontal rules
    html = html.replace(
        /^\s*\\?---+\s*$/gm,
        ""
    );

    // Convert ### headings
    html = html.replace(
        /^###\s*(.+)$/gm,
        "<h3>$1</h3>"
    );

    // Convert ## headings
    html = html.replace(
        /^##\s*(.+)$/gm,
        "<h2>$1</h2>"
    );

    // Convert # headings
    html = html.replace(
        /^#\s*(.+)$/gm,
        "<h2>$1</h2>"
    );

    // Convert bold text
    html = html.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
    );

    // Remove escaped Markdown stars
    html = html.replace(
        /\\\*/g,
        ""
    );

    // Convert bullet points
    html = html.replace(
        /^\s*[-*]\s+(.+)$/gm,
        "<li>$1</li>"
    );

    // Convert numbered headings
    html = html.replace(
        /^(\d+)\.\s+(.+)$/gm,
        "<h3>$1. $2</h3>"
    );

    // Group consecutive list items
    html = html.replace(
        /((?:<li>.*?<\/li>\s*)+)/gs,
        "<ul>$1</ul>"
    );

    // Clean excessive blank lines
    html = html.replace(
        /\n{3,}/g,
        "\n\n"
    );

    // Convert remaining line breaks
    html = html.replace(
        /\n/g,
        "<br>"
    );

    return html;
}
function showAIReviewPopup(result) {

    console.log(
        "Displaying AI result..."
    );

    const existing =
        document.getElementById(
            "elo-ai-review-popup"
        );

    if (existing) {
        existing.remove();
    }

    const overlay =
        document.createElement("div");

    overlay.id =
        "elo-ai-review-popup";

    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        z-index: 999999;
    `;


    const popup =
        document.createElement("div");

    popup.style.cssText = `
        width: 90%;
        max-width: 850px;
        max-height: 85vh;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;


    const header =
        document.createElement("div");

    header.style.cssText = `
        height: 58px;
        background: #111827;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px 0 20px;
        box-sizing: border-box;
    `;


    const title =
        document.createElement("div");

    title.textContent =
        "🤖 AI Resume Review";

    title.style.cssText = `
        font-size: 18px;
        font-weight: 700;
    `;


    const close =
        document.createElement("span");

    close.textContent = "✕";

    close.style.cssText = `
        width: 32px;
        height: 32px;
        min-width: 32px;
        max-width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: white;
        font-size: 20px;
        cursor: pointer;
        border-radius: 6px;
        flex-shrink: 0;
    `;

    close.onclick = function () {
        overlay.remove();
    };


    const content =
        document.createElement("div");

    content.style.cssText = `
        padding: 25px;
        max-height: calc(85vh - 58px);
        overflow-y: auto;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1.6;
        color: #222;
        white-space: pre-wrap;
    `;

    /*
     * Display the Gemini result directly.
     * This avoids another formatting function causing an error.
     */
   content.innerHTML =
    formatAIReview(result);

    header.appendChild(title);

    header.appendChild(close);

    popup.appendChild(header);

    popup.appendChild(content);

    overlay.appendChild(popup);

    document.body.appendChild(overlay);


    overlay.addEventListener(
        "click",
        function (event) {

            if (event.target === overlay) {
                overlay.remove();
            }

        }
    );

    console.log(
        "AI result displayed successfully."
    );
}