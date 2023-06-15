import React from "react";
import icons_cross from "./icons_cross.png";
import icons_ok from "./icons_ok.png";
import "./NewRequest.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const NewRequest = () => {
  const [Response, setResponse] = useState([]);
  const [Remark, setRemark] = useState("");
  // const [mail, setMail] = useState("");

  useEffect(() => {
    console.log("UseEffect called new wala");
    callby();
  }, []);

  const callby = () => {
    var data = JSON.stringify({
      data: {
        email: localStorage.getItem("email"),
        status: "waiting",
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
        console.log(response.data);
        console.log(response.data[0].methods_name);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const clickOnApproved = async (e,y,z) => {
    console.log("click on approved called");

    console.log("Respected email : ", e);
    console.log(Remark);
    var data = JSON.stringify({
      email: localStorage.getItem("email"),
      sourceEmail: e,
      application_name :y,
      source_application_name:z,
      remark: Remark,
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

    await axios(config)
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

  // const updateRemark = () => {
  //   console.log("updateRemark is called");
  //   console.log("<..........Remark.........>", Remark);
  //   var data = JSON.stringify({
  //     email: localStorage.getItem("email"),
  //     remark: Remark,
  //   });

  //   var config = {
  //     method: "put",
  //     url: "http://10.210.12.30:4000/api/remark",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log("Axios call Happened");
  //       console.log(JSON.stringify(response.data));
  //       console.log("call Ended");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const clickOnRejected = async (e,y,z) => {
    console.log("clickOnRejected is called");

    var data = JSON.stringify({
      email: localStorage.getItem("email"),
      sourceEmail: e,
      application_name :y,
      source_application_name:z,
      remark: Remark,
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

    await axios(config)
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
          NEW REQUESTS
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
                        verticalAlign:"middle"
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
                        verticalAlign:"middle"
                      }}
                    >
                      Requesting Domain
                    </th>

                    <th
                      scope="col"
                      s
                      style={{
                        width: "120px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign:"middle"
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
                        verticalAlign:"middle"
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
                        verticalAlign:"middle"
                      }}
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      style={{ textAlign: "center", border: "solid 1px white",verticalAlign:"middle" }}
                    >
                      Remark
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "100px",
                        textAlign: "center",
                        border: "solid 1px white",
                        verticalAlign:"middle"
                      }}
                    >
                      Option
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
                        {obj.function_name.map((e) =>(
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
                        <input
                          type="text"
                          id="rd"
                          onChange={(e) => {
                            setRemark(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td style={{ width: "110px", textAlign: "center" }}>
                        <button
                          type="button"
                          class="btn btn-success-"
                          style={{ padding: "0px", marginTop: "0px" }}
                          // onClick={clickOnApproved(obj.sourceEmail)}
                          onClick={(e) => {
                            clickOnApproved(obj.sourceEmail,obj.application_name,obj.source_application_name);
                          }}
                        >
                          <img src={icons_ok} width="30" padding="0px" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger-"
                          style={{ padding: "0px", marginTop: "0px" }}
                          onClick={(e) => {
                            clickOnRejected(obj.sourceEmail,obj.application_name,obj.source_application_name);
                          }}
                        >
                          <img
                            src={icons_cross}
                            width="28"
                            height="27"
                            padding="0px"
                          />
                        </button>
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

export default NewRequest;
