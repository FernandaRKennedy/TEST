import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <body>
      <img
        src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg"
        alt="lesbian flag art background"
        className="home-background"
      />
      <div id="log-in-form">
        <Form id="form">
          <h1>Lesbian Vibes</h1>
          <ul />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Log In
          </Button>
        </Form>
        <ul />
        <p>Don't have an account?</p>
        <Button variant="outline-dark" href="/signUp">
          Sign Up
        </Button>
      </div>
    </body>
  );
}

export default Home;
