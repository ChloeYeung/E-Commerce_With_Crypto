// /company/sales_history
import React from "react";
//Bootstrap
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//file
import CompanyNavbar from "../Components/CompanyNavbar";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import { comNavInfoThunk } from "../redux/company_navbarSlice";
import {
  showSalesHistoryThunk,
  editSalesHistoryStatusThunk,
} from "../redux/company_historySlice";
import salesHistoryEmpty from "../images/salesHistoryEmpty.jpg"
import DRInteresting from "../images/database/DRInteresting.jpg";
import PirceOfFruit from "../images/database/PirceOfFruit.jpg";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { FaEthereum } from "react-icons/fa";
//react select
import Select from "react-select";

export default function CompanySalesHistory() {
  const companynavinfo = useSelector(
    (state) => state.navbarComReducer.companynavinfo
  );

  const showsaleshistory = useSelector(
    (state) => state.salesHistoryReducer.showsaleshistory
  );

  console.log(showsaleshistory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comNavInfoThunk());
    dispatch(showSalesHistoryThunk());
  }, []);

  //  Handle History Total
  let handlecomHistoryTotal = function (element) {
    let totalPrice = 0;
    element[1].forEach((e) => {
      totalPrice += e.unit * e.price;
    });
    return totalPrice;
  };

  const options = [
    { value: "Pending", label: "Pending" },
    { value: "Comfirm", label: "Comfirm" },
    { value: "Packing", label: "Packing" },
    { value: "Shipping", label: "Shipping" },
    { value: "Finished", label: "Finished" },
  ];

  let handleSelectComHistoryChange = function (orderId, selectedOption) {
    let sendObject = {};
    sendObject.orderId = orderId;
    sendObject.newStatus = selectedOption.value;
    dispatch(editSalesHistoryStatusThunk(sendObject));
  };

  return (
    <div>
      {/* Navbar */}
      <CompanyNavbar
        companyImage={
          companynavinfo.name == "Piece Of Fruit Limited" ? 
          PirceOfFruit :
          companynavinfo.name == "Doctor Interesting Limited" ? 
          PirceOfFruit :
          companynavinfo.image_data === null
            ? cusNavNoPic
            : `data:image/png;base64 ,${companynavinfo.image_data}`
        }
        companyName={companynavinfo.name}
      />
      {/* empty showsaleshistory will render */}
      {Object.entries(showsaleshistory) == "" ? (
        <>
          <div className=" ">
            <div
              className="d-flex  row  text-center justify-content-center align-items-center"
              style={{ margin: "150px" }}
            >
              <img className="" src={salesHistoryEmpty} id="emptyCartPic" />
              <h5 className=" ">No history order</h5>
              <p className=" ">Add more product or discount your price</p>
            </div>
          </div>
        </>
      ) : (
        console.log("showsaleshistory is not empty")
      )}
      {showsaleshistory &&
        Object.entries(showsaleshistory).map((element, index) => {
          return (
            <>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="container">
                      <div className="row">
                        <div className="col-10">#{element[0]}</div>
                        <div className="col-2"> {element[1][0].date}</div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div style={{ minWidth: "30rem" }}>
                      {/* Status */}
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <p className="text-secondary">Status</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <Select
                              options={options}
                              onChange={(e) =>
                                handleSelectComHistoryChange(element[0], e)
                              }
                              placeholder={element[1][0].status}
                            />
                          </div>
                        </div>
                      </div>
                      <br />

                      {/* Customer info */}
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <p className="text-secondary">
                              Customer Infomation
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            Customer: {element[1][0].name}
                          </div>
                          <div className="col">
                            Phone no: {element[1][0].phone_no}
                          </div>
                          <div className="col">
                            Address: {element[1][0].address}
                          </div>
                        </div>
                      </div>
                      <br />

                      {/* Product & Service info */}
                      {element[1] &&
                        element[1].map((element2) => (
                          <>
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <p className="text-secondary">
                                    Product and Service
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  #{element2.type.split("")[0]}
                                  {element2.product_id}
                                </div>
                                <div className="col">
                                  {element2.product_name}
                                </div>
                                <div className="col">*{element2.unit}</div>
                                <div className="col">
                                  {element2.unit * element2.price}{" "}
                                  <FaEthereum className="FaEthereumIcon" />
                                </div>
                              </div>
                            </div>
                            <br />
                          </>
                        ))}

                      {/* Order Total */}
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>
                              <span>
                                {handlecomHistoryTotal(element)}
                                <FaEthereum className="FaEthereumIcon" />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          );
        })}
    </div>
  );
}
