import "./input.css"
import PersonalDetails from "./personalDetails/PersonalDetails";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";

const Input = () => {
  return (
    <div>
      <PersonalDetails />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}

export default Input;