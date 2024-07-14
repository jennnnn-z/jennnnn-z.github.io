import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
`;

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
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;
