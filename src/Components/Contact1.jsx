import React, { useState } from "react";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Handle form submission, e.g., send data to backend or display success message
      console.log("Form submitted:", formData);
      // Show alert
      alert("Message has been sent");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <>
      <div className="Container-fluid contact-intro">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="heading">Contact Information</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p className="address">
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
            <div className="col-md-3">
              <p className="phone">
                <span>Phone:</span>{" "}
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
            <div className="col-md-3">
              <p className="email">
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p className="website">
                <span>Website</span>{" "}
                <a href="#">yoursite.com</a>
              </p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    className="form-control message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6" id="map"></div>
          </div>
        </div>
      </div>
    </>
  );
}
