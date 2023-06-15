import React from "react";
import icons_cross from "./icons_cross.png";
import icons_ok from "./icons_ok.png";
import "./NewRequest.css";
import { useEffect, useState } from "react";
import RefreshLogo2 from "./RefreshLogo.png";
// import { FaBeer } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DEFAULT_COLOR_SCHEME_STORAGE_KEY } from "@mui/system/cssVars/getInitColorSchemeScript";

export const MyRequest = () => {
  const [Response, setResponse] = useState([]);
  const [result, setResult] = useState({});
  // const [Status, setStatus] = useState([]);
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // var URL ='./configuration'
  useEffect(() => {
    console.log("UseEffect called MyRequest wala.............>>>>>>>>>");

    callby();
  }, []);
  const xyz = (a, b) => {


    navigate("./configuration", { state: { "sourceEmail": localStorage.getItem("email"), "application_name": a, "template_type": b } });

  }


  const callby = async () => {
    console.log("Call by method is called.....................");
    var data = JSON.stringify({
      sourceEmail: localStorage.getItem("email"),
    });

    var config = {
      method: "post",
      url: "http://10.210.12.30:4000/api/status",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(
          "Hey Buddy>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....................",
          (response.data)
        );
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(
      "Axios has ended...........................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
  };

  const networkMonitorStatus = async (e) => {
    console.log("networkMonitorStatus is called...............", e);
    var data = {
      "key": e,
    };

    var config = {
      method: "post",
      url: "http://10.210.12.30:5000/api/network_monitor",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios(config)
      .then(function (response) {
        console.log(
          "Network Monitor Response.............>>>>>>>>>>>>>>>>>>>>>: ",
          JSON.stringify(response.data)
        );
        setResult(response.data)


      })
      .catch(function (err) {
        console.log(err);
      });


    console.log(
      "networkMonitorStatus is ended>>>>>>>>>>>>>>>>>>..................", result
    );
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <h2
          style={{
            textAlign: "center",
            // fontFamily: "Ariel",
            marginLeft: "250px",
            // fontWeight: "bold",
          }}
        >
          MY REQUESTS
        </h2>{" "}
        <br />
        <div
          class="card"
          style={{
            position: "revert",
            marginLeft: "230px",
            marginRight: "20px",
            boxShadow: "2px 4px 20px #2c2c63",
            borderRadius: "2px",
          }}
        >
          <div class="card-body p-0">
            <div
              iv
              class="table-responsive table-scroll"
              data-mdb-perfect-scrollbar="true"
              style={{ position: "relative" }}
            >
              <table class="table mb-0">
                <thead style={{ background: "rgb(82, 131, 184)" }}>
                  <tr>
                    <th
                      class="col"
                      style={{
                        width: "80px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      My Application
                    </th>
                    {/* <th
                      scope="col"
                      // style={{ marginRight: "0px", padding: "0px" }}
                      style={{ width: "50px" }}
                    >
                      Domain Name
                    </th> */}
                    <th
                      scope="col"
                      style={{
                        width: "110px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Requested Application
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "110px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Requested <br />
                      Methods
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "70px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Status
                    </th>
                    {/* <th scope="col" style={{ width: "50px" }}>
                      Option
                    </th> */}
                    <th
                      scope="col"
                      style={{
                        width: "110px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Interoperability <br />
                      Details
                    </th>

                    <th
                      scope="col"
                      style={{
                        width: "110px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Network <br />
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Response.map((obj) => (
                    <tr>
                      {/* {TempFunc() &&(
  // <td>Got it</td>
)} */}
                      {/* <td>Medical Insurance</td> */}
                      <td style={{ width: "50px", textAlign: "center" }}>
                        {obj.source_application_name}
                      </td>
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.application_name}
                      </td>

                      {/* Need to add map function */}
                      <td style={{ width: "150px", textAlign: "center" }}>
                        {" "}
                        {obj.function_name.map((e) => (
                          <div>{e}</div>
                        ))}
                      </td>
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.status}

                        {/* <button
                          type="submit"
                          class="btn btn-primary"
                          onClick={checkForResponse}
                        >
                          Check Here
                        </button> */}
                      </td>

                      <td style={{ width: "110px", textAlign: "center" }}>
                        {" "}
                        {obj.status === "approved" ? (
                          // <button onClick={()=>{xyz()}} >Click here</button>
                          <a href="javascript:void(0)" onClick={() => { xyz(obj.application_name, obj.template_type) }}>Click Here</a>
                        ) : obj.status === "waiting" ? (
                          <div style={{ color: "blue" }}>
                            Request is Pending
                            <br />
                            for Approval!
                          </div>
                        ) : obj.status === "rejected" ? (
                          <div style={{ color: "red" }}>
                            Your request <br />
                            has been rejected!
                          </div>
                        ) : (
                          <div style={{ color: "red" }}>Error!</div>
                        )}
                        {/* {Status === "approved" && (
                          <a href={URL}>Configuration Details</a>
                        )}
                        {Status === "waiting" && (
                          <div style={{ color: "#FFC107" }}>
                            Your request is <br />
                            not approved yet!
                          </div>
                        )}
                        {Status === "rejected" && (
                          <div style={{ color: "red" }}>
                            Your request <br />
                            has been rejected!
                          </div>
                        )} */}
                      </td>

                      <td
                        style={{
                          width: "110px",
                          textAlign: "center",
                          padding: "0px",
                          verticalAlign: "middle",
                        }}
                      >
                        <div>
                          <p onClick={() => { networkMonitorStatus(obj.key) }}>

                            {result.status =="network down...!" && result.key==(obj.key) ? (<div style={{ color: "red" }}>
                            Network Down
                          
                          </div>):result.status =="network up" && result.key==(obj.key)? (<div style={{ color: "green" }}>
                            Network Up
                          </div>):(
                          <button type="submit">Check Status</button>
                        )}

                            {/* {result == "network down...!" ? (<div style={{ color: "red" }}>
                              Network Down

                            </div>) : result == "network up" ? (<div style={{ color: "green" }}>
                              Network Up
                            </div>) : (
                              <button type="submit">Check Status</button>
                            )} */}
                          </p>

                          {/* </div> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default MyRequest;
