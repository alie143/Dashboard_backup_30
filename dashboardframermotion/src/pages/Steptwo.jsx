import { json, useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const Steptwo = () => {
  const url1 = `http://10.210.12.30:4000/selfapp/domainall`;
  const url2 = `http://10.210.12.30:4000/selfapp/application`;
  const url3 = `http://10.210.12.30:4000/selfapp/method`;
  const url4 = `http://10.210.12.30:4000/userapp/insertuser`;

  const [appName, setAppName] = useState([]);
  const [platform1, setPlatform1]=useState("");

  const [appDomain, setAppDomain] = useState([]);
  const [email, setEmail] = useState("");
  const [methodName, setMethodName] = useState([]);
  const [description, setDescription] = useState([]);
  var [selectedMethod, setSelectedMethod] = useState([]);
  // const [selectedMethodName, setSelectedMethodName] = useState([]);
  // const [selectedData, setSelectedData] = useState([]);
  // const [wholeResponse, setWholeResponse] = useState([]);
  // const [ABC, setABC] = useState("");
  var [sourceEmail, setSourceEmail] = useState("");
  var [sourceData, setSourceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSourceEmail(localStorage.getItem("email"));
 
    // var data ={
    //  "email": localStorage.getItem("email"),
    // //  platform:platform
    // platform : "Hyperledger Sawtooth"
    // }

    // axios
    //   .post(url1,data)
    //   .then((response) => {
    //     console.log("Domain Name List : ", JSON.stringify(response.data));
    //     console.log("Domain Name List Type : ", typeof response.data);

    //     setAppDomain(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log("App name list error : ", error);
    //     console.log("type of Arr", typeof arr);
    //   });

    fetchall();
  }, []);

  const fetchall = () => {
    console.log("Fetch all data is called");

    // let s=Response[0].sourceEmail;
    // console.log(",,,,,,,,,,,,,,,,,,,,,,,Value of s :",s);

    var data = JSON.stringify({
      email: localStorage.getItem("email"),
    });
    var config = {
      method: "post",
      url: "http://10.210.12.30:4000/selfapp/fetchdata",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // console.log("milgaya",JSON.stringify(response.data[0].apidata[0].application_name));
        // console.log("response cha data type alison ki jay:",typeof response.data);
        setSourceData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const abc = () => {
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>Hey AJinkya...hey Nandan",
      sourceData[0].apidata[0].template_type
    );
  };

  // var ABC1;
  const clickFunction = () => {
    const abc = document.getElementById("selectedMethodName").value;
    // ABC1 = abc;
    setSelectedMethod((oldSelectedMethod) => [...oldSelectedMethod, abc]);
    selectedMethod.map((val) => {
      console.log("Selected Method Name : " + val);
    });
  };

  // const clickOnSubmit = async(e) => {
  //   e.preventDefault();

  //   abc();

  //   console.log("clickOnSubmit is called");
  //   console.log("source Email------------------------->>>", sourceEmail);
  //   const selectedDomainName = document.getElementById("domainName").value;

  //   var dd = JSON.stringify({
  //     email:email,
  //     sourceEmail: sourceEmail,
  //     source_application_name: sourceData[0].apidata[0].application_name,
  //     source_domain_name: sourceData[0].apidata[0].template_type,
  //     apidata: {
  //       function_name: selectedMethod,
  //       template_type: selectedDomainName,
  //       application_name: document.getElementById("appName").value,
  //     },
  //     ipAddress: "10.210.12.178",
  //   });

  //   console.log(">>>>>>>>...................DD chi value...........>>>>>>>>>>>>>>>>>>>>>>.........,",dd,"...ending...");

  //   await axios
  //     .post(url4, dd)
  //     .then((response) => {
  //       console.log("Response cha data OnSubmit Wala: ", response.data.data);
  //       console.log(" onSubmit response : ", typeof response.data.data);

  //       if (response.data.data == 'success') {
  //         console.log("Inside If Block...............##########################>>>>>>>>>>>>>>>>>")
  //         navigate("/approvalpage");
  //       } else {
  //         navigate("/rejectedpage");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error from backend : ",error);
  //     });
  // };

  const clickOnSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "Click on submit is called..........>>>>>>>>>>>>>>>>>>>>>>>>..........",document.getElementById("appName").value
    );
    const selectedDomainName = document.getElementById("domainName").value;

    var data = JSON.stringify({
      email: email,
      sourceEmail: sourceEmail,
      source_application_name: sourceData[0].apidata[0].application_name,
      source_domain_name: sourceData[0].apidata[0].template_type,
      apidata: {
        function_name: selectedMethod,
        template_type: selectedDomainName,
        application_name: document.getElementById("appName").value,
      },
      ipAddress: "10.210.12.30",
    });

    var config = {
      method: "post",
      url: "http://10.210.12.30:4000/userapp/insertuser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify("Data from backend : hey siddhu ",response.data));
        if (response.data.data == "success") {
          console.log("Inside If Block...............##########################>>>>>>>>>>>>>>>>>");
          navigate("/approvalpage");
        }
      })
      .catch(function (error) {
        console.log("Error From Backend : ", error);
        navigate("/rejectedpage");
      });

    console.log(
      "clickonsubmit is ended>>>>>>>>>>>>>>...............222222222222222222222222222222....................."
    );
  };

  const clickOnDelete = (e) => {
    e.preventDefault();
    console.log("clickOnDelete is called");
    const deleteValue = document.getElementById("selectMethod").value;
    // const selectD = document.getElementById("selectDomain").value;
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

  const setPlatformaAndDomainName=(e)=>{

    console.log("Hey Alison Hey Shnakhawar>>>>>>>>>>>..........................",e);
    setPlatform1(e);
    console.log("Hey pratiksha>>>>>>>>>>......................................",platform1);
   
    var data ={
      "email": localStorage.getItem("email"),
     platform : e
     }
 
     axios
       .post(url1,data)
       .then((response) => {
         console.log("Domain Name List : ", JSON.stringify(response.data));
         console.log("Domain Name List Type : ", typeof response.data);
 
         setAppDomain(response.data);
       })
       .catch(function (error) {
         console.log("App name list error : ", error);
         console.log("type of Arr", typeof arr);
       });

  }

  const fetchAppName = () => {
    console.log("fetchAppDomain Function is called");
    var selectedDomainName = document.getElementById("domainName").value;

    // window.sessionStorage.setItem("appName" , selectedApplicationName);

    console.log("Selected App Name : ", selectedDomainName);
    let data = {
      template_type: selectedDomainName,
      platform : platform1
    };
    axios.post(url2, data).then((response) => {
      console.log(
        "response cha data>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<>>> :",
        JSON.stringify(response.data)
      );
      // console.log("Selected Domain Name : ", response.data.application_name);
      console.log("app Name Type................. : ", typeof response.data);

      setAppName(response.data);
    });
  };

  const arr = [];
  const fetchMethodName = () => {
    console.log("Inside FetchMethod Name...........>>>>>>>>>>>>>>>");
    console.log("Email :", email);
    var abc = "";
    const selectedApplicationName = document.getElementById("appName").value;
    const selectedDomainName = document.getElementById("domainName").value;
    console.log(
      "selectedApplicationName..........>>>>>>>>>>>>>>>>>>>.,",
      selectedApplicationName
    );
    console.log(
      "selectedDomainName..........>>>>>>>>>>>>>>>>>>>.,",
      selectedDomainName
    );

    for (var i = 0; i < appName.length; i++) {
      if (selectedApplicationName == appName[i].application_name) {
        abc = appName[i].email;
        console.log(
          abc +
            "################################### ABC $$$$$$$$$$$$$$$$$$$$$$$",
          appName[i].email
        );
        break;
      }
    }

    setEmail(abc);

    // setSelectedData(document.getElementById("domainName").value + "  :");

    // const xyz = document.getElementById("appName").value + "  :";
    // setSelectedMethod((oldSelectedMethod) => [...oldSelectedMethod, xyz]);

    let data = {
      template_type: selectedDomainName,
      application_name: selectedApplicationName,
      email: abc,
    };
    axios.post(url3, data).then((response) => {
      console.log("Selected app name Type : ", typeof response.data);
      console.log(
        "Method Name cha Response>>>>>>>>>>>>>>...............",
        response.data
      );
      var methodArr = [];
      var descriptionArr = [];
      response.data.map((data) => {
        methodArr.push(data.method);
        descriptionArr.push(data.description);
      });
      console.log("method Array=====> : ", methodArr);
      console.log("desciption Array=====> : ", descriptionArr);
      // console.log("Selected Methods=======> : ", response.data[0].method);
      // console.log("Selected Description+++++++> : ", response.data[0].description);
      // console.log("Selected whole data {}{}{}{{}{}}> : ", response.data);
      setMethodName(methodArr);
      setDescription(descriptionArr);
      // console.log("setMethodName ???? : ", methodName);
      // console.log("setDescription ???? : ", description);
    });

    console.log(
      "FetchMethod Name has Ended..........>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
  };

  return (
    <>
      <br />
      <br />

      <div
        style={{
          backgroundColor: "white",
          boxShadow: "4px 8px 36px #C4C3C3",
          border: "light",
          marginLeft: "300px",
          marginRight: "50px",
          marginTop: "15px",
          marginBottom: "60px",
        }}
      >
        <br />
        <h4
          style={{ fontFamily: "Arial", color: "#3D6DA0", marginLeft: "360px" }}
        >
          <b>STEP 2 (Destination)</b>
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
              // onChange={clickFunc1}
            // size="2"
            onChange={(e) => {
              setPlatformaAndDomainName(e.target.value);
            }}
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
              <b>Domain Name</b>
            </label>
            <select
              id="domainName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              onChange={fetchAppName}
              size="2"
            >
              {appDomain.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>

          {/* <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Application Name</b>
            </label>
            <select
              id="appName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              onChange={fetchAppName}
              size="2"
            >
              {appName.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div> */}

          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Application Name</b>
            </label>
            <select
              id="appName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              size="2"
              onChange={fetchMethodName}
              style={{ height: "50px" }}
            >
              {appName.map((data) => (
                <option value={data.application_name}>
                  {data.application_name}
                </option>
              ))}
            </select>
          </div>

          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Method Name</b>
            </label>
            <select
              id="selectedMethodName"
              class="form-select"
              multiple
              aria-label="multiple select example"
              onChange={clickFunction}
              size="4"
              // style={{ height: "120px" }}
            >
              {methodName.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>

          <div class="col-md-6" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Selected Method Name</b>
            </label>
            <select
              id="selectMethod"
              class="form-select"
              multiple
              aria-label="multiple select example"
              //onChange={clickFunc1}
              size="4"
              // style={{ height: "120px" }}
            >
              {/* <option style={{fontWeight :"bold"}}>{selectedData}</option> */}
              {selectedMethod.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>

          <div class="col-md-12" style={{ textAlign: "left" }}>
            <label for="inputAppName" class="form-label">
              <b>Selected Method Description</b>
            </label>
            <select
              id="methodDescription"
              disabled="disabled"
              class="form-select"
              multiple
              aria-label="multiple select example"
              //onChange={clickFunc1}
              size="4"
              // style={{ height: "120px" }}
            >
              {description.map((data) => (
                <option style={{ fontWeight: "bold" }}>{data}</option>
              ))}
            </select>
          </div>

          <div class="col-10">
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={clickOnDelete}
              >
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
        </form>
        <br />
      </div>
    </>
  );
};

export default Steptwo;
