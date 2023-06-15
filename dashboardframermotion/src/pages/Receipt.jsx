import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "react-bootstrap/Table";
import { textAlign } from "@mui/system";

const Receipt = () => {
    return(
    <> 
        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
  <table class="table border" style={{border:"solid", marginLeft:"20%",width:"40%"}}>
  <thead>
    <tr>
      <th scope="col" style={{textAlign:"center"}}>Key</th>
      <th scope="col" style={{textAlign:"center"}}>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign:"center"}}>Full Name</th>
      <td>Siddhesh Janardan Pawar</td>
      
    </tr>
    <tr>
      <th scope="row" style={{textAlign:"center"}}>Email</th>
      <td>pawar.siddhu1998@gmail.com</td>
      
    </tr>
    <tr>
      <th scope="row" style={{textAlign:"center"}}>Contact Number </th>
      <td>7219184236</td>
    </tr>
    <tr>
      <th scope="row"style={{textAlign:"center"}}>Date Of Birth</th>
      <td>21/09/1998</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>Gender</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>Address</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>City</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>State/UTs</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>Pincode</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>Investment Type</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr> <tr>
      <th scope="row" style={{textAlign:"center"}}>Policy Number</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr>
    <tr>
      <th scope="row" style={{textAlign:"center"}}>Total Gross Income</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr><tr>
      <th scope="row" style={{textAlign:"center"}}>% Tax Imposed (Percentage)</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr>
    <tr>
      <th scope="row" style={{textAlign:"center"}}>Total Payable Tax Amount (In Rupee)</th>
      <td>pawar.siddhu1998@gmail.com</td>
    </tr>
  </tbody>
</table> 
    </>

    )
}

export default Receipt;