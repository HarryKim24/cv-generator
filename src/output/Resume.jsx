/* eslint-disable react/prop-types */
import "./resume.css";

const Resume = ({ formData }) => {
  const { personalDetails, educations, experience, skills } = formData;

  return (
    <div id="resume">
      <header className="resume-header">
        <h1>{`${personalDetails.first_name || "First"} ${personalDetails.last_name || "Last"}`}</h1>
        <p>{personalDetails.email || "email@example.com"} | {personalDetails.phone_number || "Phone Number"}</p>
        <p>{personalDetails.address || "Address"}</p>
      </header>

      <main className="resume-content">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry">
            <h3>{educations.school || "School Name"}</h3>
            <p><strong>Field of Study:</strong> {educations.field_of_study || "Field of Study"}</p>
            <p><strong>Duration:</strong> {educations.date_from} - {educations.date_to}</p>
            <p>{educations.description || "Description of achievements or coursework."}</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-entry">
            <h3>{experience.company || "Company Name"}</h3>
            <p><strong>Role:</strong> {experience.role || "Role"}</p>
            <p><strong>Duration:</strong> {experience.date_from} - {experience.date_to}</p>
            <p>{experience.description || "Description of responsibilities and achievements."}</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <p>{skills.skill_set || "List of skills"}</p>
        </section>
      </main>
    </div>
  );
};

export default Resume;
