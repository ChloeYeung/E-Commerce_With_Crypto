// company/sales_summary
import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

//file
import CompanyNavbar from "../Components/CompanyNavbar";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import { comNavInfoThunk } from "../redux/company_navbarSlice";

//react icon
import { BiMoney } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";

//state
import { useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

export default function CompanySalesSummary() {
  const companynavinfo = useSelector(
    (state) => state.navbarComReducer.companynavinfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comNavInfoThunk());
  });
  return (
    <div>
      {/* Navbar */}
      <CompanyNavbar
        companyImage={
          companynavinfo.image_data === null
            ? cusNavNoPic
            : `data:image/png;base64 ,${companynavinfo.image_data}`
        }
        companyName={companynavinfo.name}
      />

      {/* Summary card */}

      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title className="text-center">Sales Summary</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted text-center"
              id="comSalesSumWelcome"
            >
              {companynavinfo.name}
            </Card.Subtitle>
            <hr />
            <Card.Text>
              <div className="container">
                <div className="row">
                  <div className="col">
                    Current sales:
                    <FaEthereum className="FaEthereumIcon" />
                  </div>
                  <div className="col">
                    Accumlated sales:
                    <FaEthereum className="FaEthereumIcon" />
                  </div>
                </div>
              </div>

              {/* Current sales: <BiMoney />
              <br />
              Accumlated sales: <GiReceiveMoney />
              <br /> */}
            </Card.Text>

            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sep 2022</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div className="container">
                      <div className="row">
                        <div className="col">Most Popular Product:</div>
                        <div className="col">Most Popular Service:</div>
                      </div>
                    </div>
                    <br />
                    <div className="container">
                      <div className="row">
                        <div className="col"> Total Selling Unit:</div>
                        <div className="col">
                          {" "}
                          Total Sales:
                          <FaEthereum className="FaEthereumIcon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
