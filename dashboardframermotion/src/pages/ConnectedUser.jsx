import React from "react";
import icons_cross from "./icons_cross.png";
import icons_ok from "./icons_ok.png";
import "./NewRequest.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const ConnectedUser = () => {
  const [Response, setResponse] = useState([]);
  // var Response=[];

  const url = `http://10.210.12.30:4000/request/fetchInterRequest`;

  useEffect((e) => {
    console.log("UseEffect called new wala");

    callby();
  }, []);

  const callby = () => {
    var data = JSON.stringify({
      data: {
        email: localStorage.getItem("email"),
        status: "approved",
      },
    });
    var config = {
      method: "post",
      url: "http://10.210.12.30:4000/request/fetchInterRequest",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data[0].methods_name);

        console.log(">>>......................................");
        // Response=response.data;
        setResponse(response.data);
        // console.log("email chi value axios call madhli :",Response[0].email);
        // console.log("application name chi value axios call madhli :",Response[0].application_name);
        console.log("/........................./");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const clickOnApproved = () => {
    console.log("clickOnApproved is called");

    var data = JSON.stringify({
      email: localStorage.getItem("email"),
      status: "approved",
    });

    var config = {
      method: "put",
      url: "http://10.210.12.30:4000/api/change",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("Axios call Happened");
        console.log(JSON.stringify(response.data));
        console.log("call Ended");
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload();
  };

  const clickOnRejected = () => {
    console.log("clickOnRejected is called");

    var data = JSON.stringify({
      email: localStorage.getItem("email"),
      status: "rejected",
    });

    var config = {
      method: "put",
      url: "http://10.210.12.30:4000/api/change",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("Axios call Happened");
        console.log(JSON.stringify(response.data));
        console.log("call Ended");
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload();
  };

  // const TempFunc=()=>{
  //   if(undefined===Response[0].email)
  //   {
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

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
          CONNECTED USERS
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
              <table class="table table-striped mb-0">
                <thead style={{ background: "rgb(82, 131, 184)" }}>
                  <tr>
                    <th
                      class="col"
                      style={{
                        width: "150px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Requesting Application
                    </th>
                    <th
                      class="col"
                      style={{
                        width: "150px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Requesting Domain
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
                      s
                      style={{
                        width: "120px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Email ID <br />
                    </th>

                    <th
                      class="col"
                      style={{
                        width: "150px",
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
                        width: "200px",
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
                        width: "120px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      style={{
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign: "middle",
                      }}
                    >
                      Remark
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
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.source_application_name}
                      </td>
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.source_domain_name}
                      </td>
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.sourceEmail}
                      </td>

                      {/* Need to add map function */}
                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.application_name}
                      </td>

                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.function_name.map((e) => (
                          <div>{e}</div>
                        ))}
                      </td>
                      <td
                        id="result"
                        style={{ width: "110px", textAlign: "center" }}
                      >
                        {obj.status}
                      </td>

                      <td style={{ width: "110px", textAlign: "center" }}>
                        {obj.remark}
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

export default ConnectedUser;
