import { json, useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
// import delete_logo from "../images/delete_logo.jpg"
// import submit_logo from "../images/submit_logo.png"
// import URL from '../config'
// import Interoperable from "./Interoperable";
const Stepone = () => {
  const [appName, setAppName] = useState([]);
  const [platform, setPlatform]=useState("");
  const [appDomain, setAppDomain] = useState("");
  var [selectedMethod, setSelectedMethod] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState([]);
  const [methodName, setMethodName] = useState([]);
  // const [exposingApi, setExposingApi] = useState([]);
  // const [requestBody, setRequestBody] = useState("");
  // const [responseBody, setResponseBody] = useState("");
  // const [restapitype, setRESTAPIType] = useState("");
  const [arr, setArr] = useState([]);
  const [emailPass, setEmailPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // const url1 = `http://10.210.12.30:3005/templates/getapplicationname`;
  const url1 = `http://10.210.12.30:4000/app/user/fetch`;
  // const url2 = `http://10.210.12.30:3005/templates/gettmpbyapplicationName`;
  // const url2 = `http://10.210.12.30:4000/selfapp/method`;
  const url2 = `http://10.210.12.30:4000/app/user/fetch/template`;
  // const url3 = `http://10.210.12.30:3005/functions/getmethod`;
  const url3 = `http://10.210.12.30:3005/functions/getmethod`;
  const url4 = `http://10.210.12.30:3005/functions/getapi`;
  const url5 = `http://10.210.12.30:4000/selfapp/insertself`;
  // const url6 = `http://10.210.12.30:5000/Controller/submitData`;

  useEffect(() => {
    //   console.log("Use Effect Called");
    //    const { passEmail }=location.state;
    //    tempfunc(passEmail);
    //    //  setEmailPass(passEmail);
    //    //console.log("Body cha Email ID :",passEmail);

    //   var data = {
    //     "email": passEmail

    //   }

    // let data = {
    //   email: localStorage.getItem("email"),
    //   platform:"Hyperledger Sawtooth"
    // };
    // console.log("email chi session storage value............", data);

    // console.log("var madhla Email chi value :", JSON.stringify(data));
    // axios
    //   .post(url1, data)OPAL SHTBDI 
    //     console.log("App Name List Type : ", typeof response.data);
    //     setAppName(response.data.application_name);
    //   })
    //   .catch(function (error) {
    //     console.log("App name list error : ", error);
    //     console.log("type of Arr", typeof arr);
    //   });
  }, []);

  const setPlatformaAndApplicationName =(e)=>{
    console.log("Heyy Ajinkya............",e);
    setPlatform(e);

    let data = {
      email: localStorage.getItem("email"),
      platform:e
    };
   
    console.log("email chi session storage value............", data);

    console.log("var madhla Email chi value :", JSON.stringify(data));
    axios
      .post(url1, data)
      .then((response) => {
        console.log(
          "App Name List : ",
          JSON.stringify(response.data.application_name)
        );
        console.log("App Name List Type : ", typeof response.data);
        setAppName(response.data.application_name);
      })
      .catch(function (error) {
        console.log("App name list error : ", error);
        console.log("type of Arr", typeof arr);
      });

  }


  const tempfunc = (data) => {
    setEmailPass(data);
    // console.log("tempfunction data : ",emailPass);
  };

  const clickFunc1 = async (e) => {
    e.preventDefault();
    console.log("Click Func 1 called");
    var selectedApplicationName = document.getElementById("appName").value;

    console.log("Selected App Name : ", selectedApplicationName);
    let data = {
      // application_name: selectedApplicationName,
      email: localStorage.getItem("email"),
      application_name: selectedApplicationName,
    };

    var res = await axios.post(url2, data);
    setAppDomain(res.data.template_type);

    let data2 = {
      template_type: res.data.template_type,
      platform:platform
    };
    console.log("domain  ==== : ", res.data.template_type);

    if (res.data.template_type != "") {
      axios.post(url3, data2).then((response) => {
        setMethodName(response.data);
      });
    }



  };

  const clickFunc2 = () => {
    console.log("ClickFunc2 is called");
    const selectedApplicationName = document.getElementById("appName").value;
    const selectedDomainName = document.getElementById("domainName").value;

    const xyz = document.getElementById("domainName").value;
    setSelectedMethod((oldSelectedMethod) => [...oldSelectedMethod, xyz]);
    // setSelectedDomain(xyz);

    // window.sessionStorage.setItem("appName" , selectedApplicationName);

    let data = {
      application_name: selectedApplicationName,
      template_type: selectedDomainName,
    };
    axios.post(url3, data).then((response) => {
      console.log("Response cha data API Version: ", response.data);
      console.log("Selected app name Type : ", typeof response.data);
      setMethodName(response.data);
    });
  };

  const clickFunc3 = () => {
    const abc = document.getElementById("selectedMethodName").value;

    // setSelectedDomain(document.getElementById("domainName").value);
    // console.log("Selected Domain for method name : ",selectedDomain);

    setSelectedMethod((oldSelectedMethod) => [...oldSelectedMethod, abc]);
    selectedMethod.map((val) => {
      console.log("Selected Method Name : ", val);
    });

    console.log(">>>>>>>>>>>>>>>>>>....<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Hey Ali Hasan",platform);
    
  };

  // const clickFunction = () => {
  //   navigate("/interoperable", { state: { selectedDomain: selectedDomain } });
  // };

  // const clickOnSave = (e) => {
  //   e.preventDefault();
  //   console.log("clickOnSave is called");
  //   const selectedBlockchainIPAddress = document.getElementById("selectedMethodName").value;

  //   let data = {
  //     function_name: selectedBlockchainIPAddress,
  //     methodName: methodName,
  //     restapitype: restapitype,
  //     ipAddress: blockChainIPAdress,
  //     requestBody: requestBody,
  //     responsebody: responseBody,
  //   };

  //   document.getElementById("demo");
  //   console.log("selected method are here : ", selectedMethod);

  //   arr[arr.length] = data;
  //   setArr(arr);

  //   console.log("Array cha Data :", arr);
  // };

  const clickOnDelete = (e) => {
    e.preventDefault();
    const deleteValue = document.getElementById("selectMethod").value;
    var array = [];
    array = [...selectedMethod];

    const filtered = array.filter((obj) => {
      return obj !== deleteValue;
    });
    console.log("filtered length : ", filtered.length);
    // if (filtered.length === 0) {
    //   selectedMethod = [];
    //   setSelectedMethod(selectedMethod);
    //   const forDomain = array.filter(obj => {
    //     return obj !== selectD;
    //   })
    //   selectedDomain = [];
    //   setSelectedDomain(forDomain);
    //   // console.log("Empty hua kya ? ",forDomain+" plus "+selectedDomain)
    // }
    console.log("cdac mumbai ===", filtered);
    selectedMethod = [];
    setSelectedMethod(filtered);
    console.log("final result : ", selectedMethod);
  };

  const clickOnSubmit = (e) => {
    e.preventDefault();
    console.log("Click on submit called...");
    const selectedApplicationName = document.getElementById("appName").value;
    const selectedDomainName = document.getElementById("domainName").value;
    // const selectedStakeHolder = document.getElementById("selectMethod").value;
    // const selectedBlockchainIPAddress = document.getElementById("exposingApi").value;
    // var listt = [];
    var data = {
      function_name: selectedMethod,
      template_type: selectedDomainName,
      application_name: selectedApplicationName,
      platform : platform
    };

    // listt[listt.length] = dd;
    // console.log("listt : ", listt);
    // console.log("list dd : ", dd);
    const payload = {
      // application_name: selectedApplicationName,
      email: localStorage.getItem("email"),
      apidata: data,
      ipAddress: "10.210.9.149",
    };

    axios
      .post(url5, payload)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(typeof response.data);
        alert("Submitted successfully...");
        // window.location.reload(true);
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
        alert("error" + error);
      });
    console.log("payload => " + JSON.stringify(payload));
  };

  return (
    <>
      <br />
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "4px 8px 36px #C4C3C3",
          border: "light",
          marginLeft: "300px",
          marginRight: "50px",
          marginTop: "80px",
          marginBottom: "60px",
        }}
      >
        <br />
        <h4
          style={{ fontFamily: "Arial", color: "#3D6DA0", marginLeft: "360px" }}
        >
          <b>STEP 1 (Source)</b>
        </h4>
        <hr></hr>
        <form
          class="row g-3"
          style={{
            marginLeft: "80px",
            marginRight: "80px",
            fontFamily: "Arial",

            width: "85%",
          }}
        >

          <div class="col-md-12" style={{ textAlign: "left" }}>
            <label for="inputBlockchainNetworkPlatform" class="form-label">
              <b>Blockchain Network Platform</b>
            </label>
            <select
              id="blockchainNetworkPlatform"
              class="form-select"
              // multiple
              // aria-label="multiple select example"
              onChange={(e) => {
                setPlatformaAndApplicationName(e.target.value);
              }}
            // size="2"
            >
               <option selected disabled>
                Select...
              </option>
              <option value="Hyperledger Sawtooth">Hyperledger Sawtooth</option>
              <option value="Hyperledger Fabric">Hyperledger Fabric</option>
            </select>
          </div>


          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Application Name</b>
            </label>
            <select
              id="appName"
              class="form-select"
              // multiple
              // aria-label="multiple select example"
              onChange={clickFunc1}
            // size="2"
            >
              <option selected disabled>
                Select...
              </option>
              {appName.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>



          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppDomain" class="form-label">
              <b>Application Domain</b>
            </label>
            <input
              id="domainName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              disabled="disabled"
              // onChange={clickFunc2}
              value={appDomain}
              size="2"
            >
              {/* {appDomain.map((data) => (
                  <option value={data}>{data}</option>
                ))} */}
            </input>
            {/* <input type="text" disabled="disabled" value={appDomain} /> */}
            {/* {appDomain.map((data) => (
                  <option value={data}>{data}</option>
                ))} */}
          </div>

          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppDomain" class="form-label">
              <b>Method Name</b>
            </label>
            <select
              id="selectedMethodName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              onChange={clickFunc3}
              size="6"
            >
              {methodName.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>

          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="selectmethod" class="form-label">
              <b>Selected Methods</b>
            </label>
            <select
              id="selectMethod"
              class="form-select"
              multiple
              aria-label="multiple select example"
              // onChange={clickOnDelete}

              size="6"
            >
              {/* <option id ="selectDomain" style={{ fontWeight: 'bold' }}>{selectedDomain}</option> */}
              {selectedMethod.map((data) => (
                <option>{data}</option>
              ))}
            </select>
          </div>

          <div class="col-10">
            <div style={{ textAlign: "right" }}>
              <button class="btn btn-primary" onClick={clickOnDelete}>
                Delete
              </button>
            </div>
          </div>

          <div class="col-1">
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={clickOnSubmit}
              >
                Submit
              </button>
            </div>
          </div>

          <br />
        </form>
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default Stepone;
