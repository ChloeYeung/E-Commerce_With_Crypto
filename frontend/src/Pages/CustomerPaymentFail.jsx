// /customer/payment_status
import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import paymentStatusSuccess from "../images/paymentStatusSuccess.png";
import paymentStatusFail from "../images/paymentStatusFail.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
import snowWhite from "../images/database/snowWhite.jpg"
import joker from "../images/database/joker.jpg"
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

export default function CustomerPayment() {
  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  useEffect(() => {
    dispatch(cusNavInfoThunk());
  }, []);
  return (
    <>
      {/* navbar */}
      <CustomerNavbar
        customerImage={
          customernavinfo.name === "Snow White"
          ? snowWhite : 
          customernavinfo.name === "Joker"
          ? joker : 
          customernavinfo.image_data === null
            ? comNavNoPic
            : `data:image/png;base64 ,${customernavinfo.image_data}`
        }
        customerName={customernavinfo.name}
      />

      {/* Success Fail */}
      <br />

      <div>
        <h3 className="text-center"> Transaction Failed </h3>

        <div className="d-flex align-items-center justify-content-center">
          <img src={paymentStatusFail} className="paymentStatusImg" />
        </div>
        <br />
        <p className="text-center">
          This transaction could not be processed due to insufficient funds in
          your wallet,
          <br />
          back to shopping cart by{" "}
          <Link to="/customer/cart" className="paymentRedirect">
            clicking here
          </Link>
        </p>
      </div>
    </>
  );
}
