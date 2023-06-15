import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary";
import ConnectedUser from "./pages/ConnectedUser";
import NewRequest from "./pages/NewRequest";
import RejectedUser from "./pages/RejectedUser";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import LogicPage from "./components/LoginPage";
import Stepone from "./pages/Stepone";
import Steptwo from "./pages/Steptwo";
import ApprovalPage from "./pages/ApprovalPage";
import MyRequest from "./pages/MyRequest";
import RejectedPage from "./pages/RejectedPage";
import ConfigurationDetails from "./pages/ConfigurationDetails";
import MyProfile from "./pages/MyProfile";
import Receipt from "./pages/Receipt";



function App() {
  return (
    <Router>
      {/* <LogicPage/> */}
      <Header />
      <Routes>
        <Route path="/" element={<LogicPage />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/summary" element={<Summary />} />
          <Route path="/connecteduser" element={<ConnectedUser />} />
          <Route path="/stepone" element={<Stepone />} />
          <Route path="/steptwo" element={<Steptwo />} />
          <Route path="/approvalpage" element={<ApprovalPage />} />
          <Route path="rejectedpage" element={<RejectedPage />} />
          <Route path="/newrequest" element={<NewRequest />} />
          <Route path="rejecteduser" element={<RejectedUser />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/myrequest" element={<MyRequest />} />
          <Route path="/myprofile" element={<MyProfile/>}/>
          <Route path="/myrequest/configuration" element={<ConfigurationDetails />} />
          {/* <Route path="/enter" element={<Receipt/>}/> */}
        </Routes>
      </Sidebar>
      <Footer />
    </Router>
  );
}

export default App;
