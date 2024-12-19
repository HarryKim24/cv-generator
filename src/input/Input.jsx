/* eslint-disable react/prop-types */
import "../../public/styles/input.css"
import PersonalDetails from "./personalDetails/PersonalDetails";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";

const Input = ({ formData, setFormData }) => {
  return (
    <div id="input">
      <h1>CV Generator</h1>
      <form>
        <PersonalDetails formData={formData} setFormData={setFormData} />
        <Education formData={formData} setFormData={setFormData} />
        <Experience formData={formData} setFormData={setFormData} />
        <Skills formData={formData} setFormData={setFormData} />
      </form>
    </div>
  );
};

export default Input;
