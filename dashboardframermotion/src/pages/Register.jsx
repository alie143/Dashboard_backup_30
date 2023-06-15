import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const Register = () => {

  const navigate =useNavigate();

    const clickOnStepOne=()=>{
        console.log("clickOnStepOne");
        // window.location.replace("http://10.210.8.215:3000");
        navigate("/stepone");
    }

    const clickOnStepTwo=()=>{
       console.log("clickOnStepTwo")
      //  window.location.replace("http://10.210.5.137:3001");
       navigate("/steptwo");
    }
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div>
        <h2
          style={{
            textAlign: "center",
            // fontFamily: "Ariel",
            marginLeft: "12%",
            // fontWeight: "bold",
          }}
        >
          INTEROPEABILITY REGISTRATION
        </h2>

        <div className="row" >
          <MDBCard
            alignment="center"
            style={{
              border: "solid",
              width: "40%",
              marginLeft: "35%",
              marginTop: "3%",
            }}
          >
            <MDBCardBody>
              <MDBCardTitle>Register My Service</MDBCardTitle>
              <MDBCardText>
                If you are not registered for interopeability, <br/> then click here{" "}
              </MDBCardText>
              <br />
              <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={clickOnStepOne}
                    >
                    Register
                    </button>
                
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            alignment="center"
            style={{
              border: "solid",
              width: "40%",
              marginLeft: "35%",
              marginTop: "1%",
            }}
          >
            <MDBCardBody>
              <MDBCardTitle>Request For Service</MDBCardTitle>
              <MDBCardText>
                If you want to do interopeability with other applications, <br/> then
                click here{" "}
              </MDBCardText>
              <br/>
            
            
                    <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={clickOnStepTwo}
                    >
                    Request
                    </button>
                
            
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>

    
    </>
  );
};

export default Register;