import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";

const RejectedPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const url = `http://10.210.12.30:4000/request/fetchInterRequest`;

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  // var data = {
  //     "email" : JSON.stringify(email),
  // }

  var data = JSON.stringify({
    data: {
      email: email,
      // "status":"approved"
    },
  });

  console.log("email in this data ===================: ", data);

  const clickonhome = () => {
    console.log("Clickonhome is called.......................");
    navigate("/summary");
    console.log("Clickonhome is ended...................");
  };

  return (
    <>
      <Header />
      <br />
      <div
        class="col-4"
        style={{
          backgroundColor: "white",
          boxShadow: "4px 8px 36px #C4C3C3",
          border: "light",
          marginLeft: "35%",
          padding: "5%",
          marginTop: "6%",
          fontFamily: "Arial",
          border: "solid",
          textAlign: "center",
        }}
      >
        <h5>
          <b>Something Went Wrong</b>{" "}
        </h5>
        <br />
        <p textAlign="center">
          Your Request for Interoperability has failed due to some reason,
          Please Try after some time
        </p>
        <p textAlign="center">Get back to Home page </p>

        <br />

        <div style={{ marginBottom: "10px" }}>
          <button type="submit" class="btn btn-primary" onClick={clickonhome}>
            Home
          </button>
        </div>
        <br />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default RejectedPage;
