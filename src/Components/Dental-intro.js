import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form, Alert } from "react-bootstrap";
import { PiUserFill } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DentalIntro() {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [departmentSelected, setDepartmentSelected] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  useEffect(() => {
    const today = new Date();
    const twoMonthsLater = new Date(today);
    twoMonthsLater.setMonth(today.getMonth() + 2);
    setMinDate(formatDate(today));
    setMaxDate(formatDate(twoMonthsLater));
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month.toString().padStart(2, "0")}-${day.toString().padStart(
      2,
      "0"
    )}`;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !(departmentSelected && dateSelected)) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true && departmentSelected && dateSelected) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Container className="dental-intro">
        <Row className="dental-service-row">
          <Col sm md={3} className="color-1 p-4">
            <h3>Emergency Cases</h3>
            <p>A small river named Duden flows by their place and supplies</p>
            <span className="phone-no">+ (123) 456 7890</span>
          </Col>
          <Col sm md={3} className="color-2 p-4">
            <h3>Opening Hours</h3>
            <p className="opening-hours">
              <table>
                <tr>
                  <td>
                    <span>Monday - Friday&nbsp;</span>
                  </td>
                  <td>
                    <time>9.30 - 13.30 |</time>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <time>16.30 - 19.30</time>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Saturday </span>
                  </td>
                  <td>
                    <time>9.30 - 13.30</time>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Sunday </span>
                  </td>
                  <td>
                    <time>Closed</time>
                  </td>
                </tr>
              </table>
            </p>
          </Col>
          <Col sm md={6} className="color-3 p-3">
            <h3>Make an Appointment</h3>
            <Form
              className="appointment-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col sm={4} className="input-icon">
                  <table>
                    <tr>
                     <td>

                  <Form.Select
                    aria-label="Default select example"
                    required
                    onChange={(e) => setDepartmentSelected(!!e.target.value)}
                    >
                    <option className="option-bg">Department</option>
                    <option value="1" className="option-bg">
                      Teeth whitening
                    </option>
                    <option value="2" className="option-bg">
                      Teeth cleaning
                    </option>
                    <option value="3" className="option-bg">
                      Quality Brackets
                    </option>
                    <option value="4" className="option-bg">
                      Modern Anesthetic
                    </option>
                  </Form.Select>
                      </td>
                      <td>

                  <RiArrowDropDownLine />
                      </td>
                    </tr>
                    <tr>
                    <td>
                  <Form.Control.Feedback type="invalid">
                    Please select a department.
                  </Form.Control.Feedback>
                    </td>
                    </tr>
                    </table>
                </Col>
                <Col sm={4} className="input-icon">
                  <table>
                    <tr>
                      <td>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    />
                    </td>
                    <td>
                  <PiUserFill />
                    </td>
                    </tr>
                    <tr>
                      <td>

                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                      </td>
                   </tr>
                    </table>
                </Col>
                <Col sm={4} className="input-icon">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <FaPaperPlane />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="input-icon">
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    required
                    min={minDate}
                    max={maxDate}
                    onChange={(e) => setDateSelected(!!e.target.value)}
                  />
                  <MdDateRange />
                  <Form.Control.Feedback type="invalid">
                    Please select a date within the next two months.
                  </Form.Control.Feedback>
                </Col>
                <Col sm={4} className="input-icon">
                  <Form.Select
                    aria-label="Default select example"
                    required
                  >
                    <option>Time</option>
                    <option value="1">10.00am</option>
                    <option value="2">11.00am</option>
                    <option value="3">12.00pm</option>
                    <option value="4">1.00pm</option>
                    <option value="5">5.00pm</option>
                    <option value="6">6.00pm</option>
                    <option value="7">7.00pm</option>
                  </Form.Select>
                  <RiArrowDropDownLine />
                  <Form.Control.Feedback type="invalid">
                    Please select a time.
                  </Form.Control.Feedback>
                </Col>
                <Col sm={4} className="input-icon">
                  <Form.Control
                    type="tel"
                    placeholder="Phone"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                  <FaPhone />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Button type="submit">Make an Appointment</Button>
            </Form>
            {showAlert && (
              <Alert variant="success" className="mt-3">
                Your appointment has been successfully scheduled!
              </Alert>
            )}
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
