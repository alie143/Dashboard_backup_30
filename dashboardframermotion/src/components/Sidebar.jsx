import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaAngular,
  FaBars,
  FaRegistered,
} from "react-icons/fa";
import { AiFillProfile, AiFillTrademarkCircle, IconName } from "react-icons/ai";
import { ImBell, ImUserCheck, ImUserMinus, ImUser } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
const routes = [
  {
    path: "/registration",
    name: "Register",
    icon: <FaRegistered />,
  },

  {
    path: "/myprofile",
    name: "My Profile",
    icon: <CgProfile />,
  },

  {
    path: "/myrequest",
    name: "My Requests",
    icon: <ImUser />,
  },

  {
    path: "/summary",
    name: "Summary",
    icon: <FaHome />,
  },

  {
    path: "/newrequest",
    name: "New Requests",
    icon: <ImBell />,
  },
  {
    path: "/connecteduser",
    name: "Connected Services",
    icon: <ImUserCheck />,
  },

  {
    path: "/rejecteduser",
    name: "Rejected Services",
    icon: <ImUserMinus />,
  },

  {
    path: "/",
    name: "Logout",
    icon: <BiLogOut />,
  },
];

const Sidebar = ({ children }) => {
  const x = localStorage.getItem("email");

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  //   useEffect(() => {
  //     const { passEmail } = location.state;
  //     setEmail(passEmail);

  // }, []);

  //  setEmail(x);

  return (
    <>
      <br />

      <div className="mainContainer">
        <motion.div animate={{ width: "220px" }} className="sidebar">
          <div className="top_section" style={{ wordBreak: "break-word" }}>
            Welcome
            <br />
            {x}
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon"> {route.icon}</div>
                <div className="link_text">{route.name}</div>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
