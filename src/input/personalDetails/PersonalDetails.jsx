/* eslint-disable react/prop-types */
import "./personalDetails.css";

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, [name]: value },
    }));
  };

  return (
    <div id="personal_details">
      <h2>Personal Details</h2>

      <div className="input_info">
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" value={formData.personalDetails.first_name} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" value={formData.personalDetails.last_name} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={formData.personalDetails.address} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="phone_number">Phone Number</label>
        <input type="tel" id="phone_number" name="phone_number" value={formData.personalDetails.phone_number} onChange={handleChange} />
      </div>

      <div className="input_info">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.personalDetails.email} onChange={handleChange} />
      </div>
    </div>
  );
};

export default PersonalDetails;
