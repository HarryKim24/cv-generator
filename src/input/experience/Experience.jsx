/* eslint-disable react/prop-types */
import "./experience.css";

const Experience = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      experience: { ...prev.experience, [name]: value },
    }));
  };

  return (
    <div id="experience">
      <h2>Experience</h2>

      <div className="input_info">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" value={formData.experience.company} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" value={formData.experience.role} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="date_from">From</label>
        <input type="date" id="date_from" name="date_from" value={formData.experience.date_from} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="date_to">To</label>
        <input type="date" id="date_to" name="date_to" value={formData.experience.date_to} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.experience.description} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Experience;
