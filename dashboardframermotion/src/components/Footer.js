import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/footer.css";
import cdac_logo from "../images/photo/CDAC.png";
import meity_logo from "../images/photo/meity-logo.png";
import digital_india_logo from "../images/photo/digital-india.png";
import idrbt_logo from "../images/photo/idrbt.png";
import iiit_logo from "../images/photo/iiit-logo.png";
import iit_hyd_logo from "../images/photo/iit-hydrabad-logo.png";
import nic_logo from "../images/photo/nic-logo.png";
import set_india_chennai_logo from "../images/photo/sets-india-chennai.png";


const Footer = (props) => {
    return (
      <div class="d-flex text-light footer-basic footer align-items-center justify-content-center">
  
        <div id="sectionUbf" style={{ background: "#f2f2f2" ,position:"fixed",left:"0px", right:"0px",bottom:"-29px"}}>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="position-9a module card" aria-label="Quick Links">
                  <div class="card-body p-1">
                    <div id="mod-custom166" class="mod-custom custom">
                      <div class="d-flex align-items-center bd-highlight">
                        <div class="container">
                          <div class="row ubfImages">
                            <div class="col-md col-4">
                              <a href="https://www.meity.gov.in/">
                                <img
                                  src={meity_logo}
                                  alt="meity_logov"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.cdac.in/">
                                <img
                                  src={cdac_logo}
                                  alt="cdac_logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.setsindia.in/">
                                <img
                                  src={set_india_chennai_logo}
                                  alt="set_india_chennai_logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.idrbt.ac.in/">
                                <img
                                  src={idrbt_logo}
                                  alt="idrbt Logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.iith.ac.in/">
                                <img
                                  src={iit_hyd_logo}
                                  alt="iit_hyd_logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.iiit.ac.in/">
                                <img
                                  src={iiit_logo}
                                  alt="iiit_logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.nic.in/">
                                <img
                                  src={nic_logo}
                                  alt="NIC Logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                            <div class="col-md col-4">
                              <a href="https://www.digitalindia.gov.in/">
                                <img
                                  src={digital_india_logo}
                                  alt="digital_india_logo"
                                  target="_blank"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;