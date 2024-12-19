/* eslint-disable react/prop-types */
import "./education.css";

const Education = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      educations: { ...prev.educations, [name]: value },
    }));
  };

  return (
    <div id="education">
      <h2>Education</h2>

      <div className="input_info">
        <label htmlFor="school">School</label>
        <input type="text" id="school" name="school" value={formData.educations.school} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="field_of_study">Field of Study</label>
        <input type="text" id="field_of_study" name="field_of_study" value={formData.educations.field_of_study} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="date_from">From</label>
        <input type="date" id="date_from" name="date_from" value={formData.educations.date_from} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="date_to">To</label>
        <input type="date" id="date_to" name="date_to" value={formData.educations.date_to} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.educations.description} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Education;
