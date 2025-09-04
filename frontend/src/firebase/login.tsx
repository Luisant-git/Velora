import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Form, Alert } from "react-bootstrap";
const Login = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  };



  return (
    <div className="backimage">
      <Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center authentication authentication-basic h-100 pt-3">
            <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
              <div className="mb-3 d-flex justify-content-center">
                <h2 style={{ color: '#2196f3', fontWeight: 'bold' }}>Velora</h2>
              </div>
              <Card className="custom-card my-4">
                <Card.Body>
                  <p className="h5 mb-2 text-center">Sign In</p>
                  <p className="mb-4 text-muted op-7 fw-normal text-center">
                    Welcome back!
                  </p>
                  <Form onSubmit={handleSubmit}>

                    <Col xl={12}>
                      <Form.Label htmlFor="email" className="text-default">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
placeholder="Enter email"
                        value={email}
                        onChange={changeHandler}
                        required
                      />
                    </Col>
                    <div className="col-xl-12 mb-2 mt-3">
                      <div className="position-relative">
                        <Form.Label htmlFor="role" className="text-default">
                          Password
                        </Form.Label>
                        <Form.Control
                          name="password"
                          type={passwordshow1 ? "text" : "password"}
                          value={password}
                          onChange={changeHandler}
                          className="create-password-input"
                          id="signin-password"
placeholder="Enter password"
                          required
                        />
                        <Link
                          to="#!"
                          className="show-password-button text-muted"
                          id="button-addon2"
                          onClick={() => setpasswordshow1(!passwordshow1)}
                        >
                          <i
                            className={`${
                              passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                          ></i>
                        </Link>
                      </div>

                    </div>
                    <div className="d-grid mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
>
                        Sign In
                      </button>
                    </div>
                  </Form>

                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Login;
