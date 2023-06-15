import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  title: {
    // fontFamily: "Arial ",
    fontSize: "1.8em",
    fontWeight: "bold",
    color: "white",
    marginLeft: "370px",
    marginRight: "30px",
    marginTop: "5px",
    padding: "0",
  },
  login: {
    fontFamily: "Courier New",
    marginLeft: "0",
    marginRight: "-5",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  signup: {
    fontFamily: "Courier New",
    margin: "0",
    marginRight: "55px",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  logo: {
    marginLeft: "5px",
    width: "200px",
    height: "50px",
  },
  NBFLogo: {
    marginRight: "0px",
    width: "150px",
    height: "50px",
    marginTop: "0px",
  },
  userlogo: {
    marginLeft: "0px",
    width: "40px",
    height: "60px",
    marginTop: "0px",
  },
  navbar: {
    backgroundColor: "#3D6DA0",
    position: "top",
  },
};
const Header = () => {
  return (
    <header className="sticky-top" style={{ position: "fixed", width: "100%" }}>
      <nav class="navbar navbar-expand-md navbar-light " style={styles.navbar}>
        <div class="container-fluid topcolor">
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              {/* <a href="/" class="nav-item nav-link active" style={styles.title}>
                Medical Insurance Registration Form
              </a> */}
              <a href="/" style={{ marginLeft: "10px" }}>
                <img
                  src={require("../images/ubfUpdated.png")}
                  style={styles.NBFLogo}
                  alt="CoolBrand"
                />
              </a>

              {/* <a  href="/" class="nav-item nav-link" style={styles.title}>
                INTEROPERABILITY DASHBOARD
              </a> */}

              <ul className=" nav navbar-nav navbar-center">
                <li className="nav-item active">
                  <a
                    href="/"
                    className="nav-item nav-link"
                    style={styles.title}
                  >
                    INTEROPERABILITY DASHBOARD
                  </a>
                </li>
              </ul>

              {/* <a href="/" class="nav-item nav-link" style={styles.title}>
                Contact Us
              </a> */}
            </div>
            <div class="navbar-nav ms-auto">
              {/* <a href="/" style={styles.login} class="nav-item nav-link">
                Login{" "}
              </a> */}
              <label
                style={{ color: "white", fontWeight: "bold", marginTop: "8px" }}
              >
                {/* | */}
              </label>
              {/* <a href="/" style={styles.signup} class="nav-item nav-link">
                Signup
              </a> */}
              <a href="/" style={{ marginRight: "10px" }}>
                <img
                  src={require("../images/meity_logo.png")}
                  style={styles.userlogo}
                  alt="CoolBrand"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
