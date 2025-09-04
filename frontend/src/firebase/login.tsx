import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Form } from "react-bootstrap";
import SpkAlert from "../@spk-reusable-components/reusable-uielements/spk-alert";
import logo from "../assets/images/brand-logos/toggle-white.png";
import { Concernlookup } from "../api/concern";
import { getFinancialYears } from "../api/financial";
const Login = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  interface FinancialYear {
    financialId: string | number | readonly string[] | undefined;
    HeaderId: number;
    YearId: string;
  }

  const [lookupFinancilaYear, setlookupFinancilaYear] = useState<
    FinancialYear[]
  >([]);
  const navigate = useNavigate();
  interface Concern {
    HeaderId: number;
    Concern_Name: string;
  }

  const [lookUpData, setLookUpData] = useState<Concern[]>([]);
  const [data, setData] = useState<{
    emailOrName: string;
    password: string;
    concernId: number | null;
    financialId: string | number | null;
  }>({
    emailOrName: "",
    password: "",
    concernId: null,
    financialId: null,
  });
  const { emailOrName, password } = data;

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]:
        name === "concernId" || name === "financialId"
          ? parseInt(value)
          : value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.access_token);

        navigate("/dashboard/sales");
        window.location.reload();
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getconcernId = () => {
    Concernlookup().then((res) => {
      console.log(res.data);
      setLookUpData(res.data);
    });

    getFinancialYears().then((res) => {
      console.log(res.data);
      setlookupFinancilaYear(res.data);
    });
  };
  useEffect(() => {
    getconcernId();
  }, []);

  return (
    <div className="backimage">
      <Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center authentication authentication-basic h-100 pt-3">
            <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
              <div className="mb-3 d-flex justify-content-center">
                <Link to="#">
                  <img src={logo} alt="logo" className="" width={200} />
                </Link>
              </div>
              <Card className="custom-card my-4">
                <Card.Body>
                  <p className="h5 mb-2 text-center">Sign In</p>
                  <p className="mb-4 text-muted op-7 fw-normal text-center">
                    Welcome back!
                  </p>
                  <Form onSubmit={handleSubmit}>
                    {err && <SpkAlert variant="danger">{err}</SpkAlert>}
                    <Col xl={12}>
                      <Form.Label
                        htmlFor="emailOrName"
                        className="text-default"
                      >
                        user Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="emailOrName"
                        id="emailOrName"
                        placeholder="email"
                        value={emailOrName}
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
                          placeholder="password"
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
                 
                      <Col xl={12} className="mt-3">
                        <Form.Label
                          htmlFor="financialId"
                          className="text-default"
                        >
                          Financial Year
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="financialId"
                          id="financialId"
                          onChange={changeHandler}
                          required
                        >
                          <option value="">Select Year</option>
                          {lookupFinancilaYear.map((item) => (
                            <option value={item.HeaderId} key={item.HeaderId}>
                              {item.YearId}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col xl={12} className="mt-3">
                        <Form.Label htmlFor=" Concern" className="text-default">
                          Concern
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="concernId"
                          id="concernId"
                          onChange={changeHandler}
                          required
                        >
                          <option value="">Select Concern </option>

                          {lookUpData.map((item) => (
                            <option value={item.HeaderId}>
                              {item.Concern_Name}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </div>
                    <div className="d-grid mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Signing In..." : "Sign In"}
                      </button>
                    </div>
                  </Form>
                  {/* <div className="text-center">
                    <p className="text-muted mt-3 mb-0">
                      Don't have an account?
                      <Link
                        to={`${
                          import.meta.env.BASE_URL
                        }authentication/sign-up/sign-up-basic`}
                        className="text-primary"
                      >
                        {" "}
                        Sign Up
                      </Link>
                    </p>
                  </div> */}
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
