import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation here if needed
    // For simplicity, we're assuming the form is valid
    const email = "jenzhang02@protonmail.com";
    // Process the form data, send it to the server, etc.
    console.log("Form data:", formData);
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  formData.subject
)}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoLink, "_blank");
    // Clear the form after submission
    setFormData({
      name: "",
      subject: "",
      message: "",
    });
  };


  return (
    <div style={{margin: "10px"}}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "50%", margin: "5px" }}
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          style={{ width: "50%", margin: "5px" }}
          placeholder="Subject"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          style={{ width: "50%", margin: "5px" }}
          placeholder="Message"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
