import "./App.css";
import { useState } from "react";
import Input from "./input/Input";
import Resume from "./output/Resume";

function App() {
  const [formData, setFormData] = useState({
    personalDetails: {
      first_name: "Harry",
      last_name: "Kim",
      address: "Suwon, KR",
      phone_number: "01012345678",
      email: "harryfake@email.com",
    },
    educations: {
      school: "Great College",
      field_of_study: "Computer Science",
      date_from: "2024-01-01",
      date_to: "2024-01-01",
      description: "Best in innovative technological solution awardee",
    },
    experience: {
      company: "Top Company, Inc.",
      role: "Software Engineer",
      date_from: "2024-01-01",
      date_to: "2024-01-01",
      description: "Managed a team of 6 people in delivering project",
    },
    skills: {
      skill_set: "Web Development, Embedded Programming ",
    },
  });

  return (
    <div id="app">
      <Input formData={formData} setFormData={setFormData} />
      <Resume formData={formData} />
    </div>
  );
}

export default App;
