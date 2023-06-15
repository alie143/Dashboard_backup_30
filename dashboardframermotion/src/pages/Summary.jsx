import React from "react";
import "./Summary.css";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CodeSharp } from "@material-ui/icons";

const Summary = () => {
  const [Count, setCount] = useState([]);

  useEffect(() => {
    console.log("UseEffect called new wala");
    count();
  }, []);

  const count = () => {
    console.log("clickOnRejected is called");

    var data = JSON.stringify({
      email: localStorage.getItem("email"),
    });
    console.log("daataaa ", data);
    var config = {
      method: "post",
      url: "http://10.210.12.30:4000/api/count",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setCount(response.data);
        console.log("Axios call Happened");
        console.log(JSON.stringify(response.data));
        console.log("call Ended");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div>
        <h2
          style={{
            textAlign: "center",
            // fontFamily: "Ariel",
            marginLeft: "0%",
            // fontWeight: "bold",
          }}
        >
          My &nbsp;BIG &nbsp;SUMMARY
        </h2>
        <div class="container">
          <div class="row" style={{ marginLeft: "17%", marginTop: "4%" }}>
            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-blue order-card">
                <div class="card-block">
                  <h6 class="m-b-20" style={{ color: "blue" }}>
                    Total Number of Requests Received
                  </h6>
                  <h2 class="text-right">
                    {/* <i class="fa fa-cart-plus f-left" style={{border :"solid" }}></i> */}
                    <span style={{ marginLeft: "30px", color: "blue" }}>
                      {Count[0] + Count[1] + Count[2]}
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-green order-card">
                <div class="card-block">
                  <h6 class="m-b-20" style={{ color: "green"}}>
                    Number of Approved Requests
                  </h6>
                  <h2 class="text-right">
                    {/* <i class="fa fa-rocket f-left"></i> */}
                    <span style={{ marginLeft: "30px", color: "green" }}>
                      {Count[0]}
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-pink order-card">
                <div class="card-block">
                  <h6 class="m-b-20" style={{ color: "red" }}>
                    Number of Rejected Requests
                  </h6>
                  <h2 class="text-right">
                    {/* <i class="fa fa-credit-card f-left"></i> */}
                    <span style={{ marginLeft: "30px", color: "red" }}>
                      {Count[1]}
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-yellow order-card">
                <div class="card-block">
                  <h6 class="m-b-20" style={{ color: "orange" }}>
                    Number of Pending Requests
                  </h6>
                  <h2 class="text-right">
                    {/* <i class="fa fa-refresh f-left"></i> */}
                    <span style={{ marginLeft: "30px", color: "orange" }}>
                      {Count[2]}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
export default Summary;
