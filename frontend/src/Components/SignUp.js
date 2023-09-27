import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Navigate = useNavigate();
  const [accountInput, setAccountInput] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
    email: "",
    age: "",
    password: "",
  });

  //sets the url for profile creation
  const URL = `${process.env.REACT_APP_BACKEND_URI}/Account`;

  //function to handle the change in the textboxes
  const handleChange = (e) => {
    const value = e.target.value;
    setAccountInput({
      ...accountInput,
      [e.target.name]: value,
    });
  };
  //function to handle cnahge in checkbox
  const handleUpdateCheck = (e) => {
    const checked = e.target.checked;
    setAccountInput({
      ...accountInput,
      [e.target.name]: checked,
    });
  };
  //handles the submit to create the profile in the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(accountInput);
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountInput),
    });
    if (response.status !== 201) console.log("error");
    Navigate(`/profile`);
  };

  return (
    <body>
      <img
        id="signup"
        src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg"
        alt="lesbian flag art background"
        className="home-background"
      ></img>
      <div id="sign-up-form">
        <div>
          <h3>Sign Up</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <FormGroup controlid="formGridName">
              <Form.Control
                controlid="userName"
                type="text"
                onChange={handleChange}
                name="userName"
                placeholder="Username"
              />

              <Form.Label></Form.Label>
              <Form.Control
                controlid="firstName"
                type="text"
                onChange={handleChange}
                name="firstName"
                placeholder="First Name"
              />
              <Form.Label></Form.Label>
              <Form.Control
                controlid="lastName"
                type="text"
                onChange={handleChange}
                name="lastName"
                placeholder="Last Name"
              />

              <Form.Label></Form.Label>
              <Form.Control
                controlid="age"
                type="number"
                onChange={handleChange}
                name="age"
                placeholder="Age"
              />
              <Form.Label>Profile Picture URL</Form.Label>
              <Form.Control
                controlid="profilePicture"
                type="text"
                onChange={handleChange}
                name="profilePicture"
                placeholder="Profile Picture URL"
              />
            </FormGroup>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={7} controlId="formGridEmail">
              <Form.Label></Form.Label>
              <Form.Control
                controlid="emailAddress"
                type="email"
                onChange={handleChange}
                name="emailAddress"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label></Form.Label>
              <Form.Control
                controlid="password"
                type="password"
                secureTextEntry={true}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              controlid="getsUpdates"
              type="checkbox"
              defaultChecked={accountInput.getsUpdates}
              name="getsUpdates"
              onChange={handleUpdateCheck}
              label="Check to receive updates"
            />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </body>
  );
};

export default SignUp;
