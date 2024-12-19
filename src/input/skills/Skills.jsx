/* eslint-disable react/prop-types */
import "./skills.css";

const Skills = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [name]: value },
    }));
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="input_info">
        <label htmlFor="skill_set">Skill Set</label>
        <textarea id="skill_set" name="skill_set" value={formData.skills.skill_set} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Skills;
