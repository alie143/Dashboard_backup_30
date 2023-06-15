import { json, useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

const ConfigurationDetails = () => {

  const location = useLocation();
  const [gen, setGen] = useState("");
  const [apiData, setapiData] = useState([]);
  const [Response, setResponse]=useState({});
  // const [key, setkey] = useState("");

  const url = `http://10.210.12.30:4000/userapp/fetch`;

  var a = localStorage.getItem("email");

  useEffect(() => {
   const { sourceEmail,application_name,template_type } = location.state;

   console.log("Hey Suraj >>>>>>>>>>>>>>>>>Hey Shankhwar>>>>>>>>>>>>>>>>",sourceEmail,application_name,template_type);
  
    let data = {
      "email":sourceEmail,
      "application_name":application_name,
        "template_type":template_type
    };
    axios
      .post(url, data)
      .then((response) => {
        console.log("Axios Call happen...............");
        console.log("Response Cha Data Ajinkya Sheth......... : ", (response.data));
        console.log("Response data cha  Type : ", typeof response.data);

        console.log("apidata : ", JSON.stringify(response.data.apidata));
        console.log("apidata>>>>> : ", JSON.stringify(response.data));

       
            setResponse(response.data);
        setapiData(response.data.apidata);
        
        console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",apiData);

      
      })
      .catch(function (error) {
        console.log("App name list error : ", error);
        console.log("type of Arr", typeof arr);
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
        }}
      >
        <br />
        <h4 style={{ fontFamily: "Arial", color: "#3D6DA0",marginLeft : "200px" }}>
          <b> INTEROPERABILITY&nbsp; DETAILS</b>
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
              <tr>
                <th style={{ width: "50%" }}>Generic API</th>
                <td style={{ width: "auto" }}>{Response.generic_api}</td>
              </tr>{" "}
            </thead>

            {apiData.map((e) => (
              <tbody>
                <tr style={{ backgroundColor: "lightGrey" }}>
                  <th>Methods</th>
                  <td>{e.function_name}</td>
                  {/* <td>Otto</td>
          <td>@mdo</td> */}
                </tr>

                <tr>
                  <th>Request Body</th>
                  <td style={{ wordBreak: "break-word" }}>
                    {e.reqbody}
                    {/* {meth.map((data) => (
                    <textarea>{data.method_name}</textarea>
                  ))} */}
                  </td>
                </tr>
                <tr>
                  <th>Response Body</th>
                  <td style={{ wordBreak: "break-word" }}>
                    {e.resbody}
                    {/* {meth.map((data) => (
                    <textarea>{data.method_name}</textarea>
                  ))} */}
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

export default ConfigurationDetails;
