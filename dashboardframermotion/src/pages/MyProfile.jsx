import { json, useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import React from "react";

const MyProfile = () => {
  const url = `http://10.210.12.30:4000/selfapp/fetchdata`;

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    let data = {
      email: localStorage.getItem("email"),
    };

    axios.post(url, data).then((response) => {
      console.log("Profile Response data...........", response.data);
      console.log("Response cha type...", typeof response.data);
      setProfile(response.data);
    });
  }, []);
  return (
    <>
      {/* <Header /> */}
      <br />
      <br />
      <br />

      <div
        style={{
          backgroundColor: "white",
          boxShadow: "4px 8px 36px #C4C3C3",
          border: "light",
          marginLeft: "25%",
          marginRight: "20%",
          marginTop: "20px",
          marginBottom: "80px",
          //   position: "static",
          //   padding:"0px"
        }}
      >
        <br />
        <h4
          style={{ fontFamily: "Arial", color: "#3D6DA0", marginLeft: "200px" }}
        >
          <b> PROFILE&nbsp; DETAILS</b>
        </h4>
        <hr></hr>
        <br />
        <form
          class="row g-3"
          style={{
            marginLeft: "25%",
            //  marginRight: "50%",
            fontFamily: "Arial",
          }}
        >
          <Table bordered>
            <thead>
              <tr style={{ backgroundColor: "lightGrey" }}>
                <th style={{ width: "50%" }}>Particular</th>
                <td style={{ width: "auto", fontWeight:"bold" }}>Details</td>
              </tr>{" "}
            </thead>

            {profile.map((e) => (
              <tbody>
                <tr>
                  <th>Email ID</th>
                  <td>{e.email}</td>
                  {/* <td>Otto</td>
          <td>@mdo</td> */}
                </tr>

                <tr>
                  <th>Domain Name</th>
                  <td style={{ wordBreak: "break-word" }}>
                    {e.apidata.map((data)=>(
                      <div>{data.template_type}</div> 
                    ))}
                    {/* {meth.map((data) => (
                    <textarea>{data.method_name}</textarea>
                  ))} */}
                  </td>
                </tr>
                <tr>
                  <th>Application Name</th>
                  <td style={{ wordBreak: "break-word" }}>
                    {e.apidata.map((data) => (
                      <div>{data.application_name}</div>
                    ))}
                    {/* {meth.map((data) => (
                    <textarea>{data.method_name}</textarea>
                  ))} */}
                  </td>
                </tr>
                <tr>
                  <th>Methods</th>
                  <td style={{ wordBreak: "break-word" }}>
                    {/* {e.apidata[0].apidatalist[0].function_name} */}
                    {e.apidata.map((data1)=>(
                      <div>{data1.apidatalist.map((data2)=>(
                        <div>{data2.function_name}</div>
                      ))}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </form>
        <br />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MyProfile;
