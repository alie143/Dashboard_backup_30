import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router";
// import 1meity_img from "../images/1meity_img.jpg"
import epramaan_img from "../images/e-pramaan1.jpeg";
import Group from "../images/Group.png";
import logo from "../images/logo.png";
import NBF from "../images/01.png";


const LoginPage = () => {
  const [email, setEmail] = useState("");


  const navigate= useNavigate();

  const clickOnLogin = () => {
    localStorage.setItem("email",email)
    console.log("clickOnLogin is called");
    navigate("/summary", {state: {passEmail : email}});
    
  }

  return (
    <>
      <Header />
      <br />

      <section className="vh-100" style={{ marginTop: "-25px" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{
                  "box-shadow":
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="card-body p-5 text-center">
                  <h3
                    className="mb-5"
                    style={{
                      fontFamily: "arial",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    Dashboard Login
                  </h3>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label"
                      style={{ fontFamily: "arial", fontWeight: "bold" }}
                    >
                      Enter your Email here
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-start mb-4"></div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{ fontFamily: "arial" }}
                    onClick={clickOnLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default LoginPage;