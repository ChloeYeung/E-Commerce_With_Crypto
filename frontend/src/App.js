// css
import "./App.scss";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//file
import AboutUs from "./Pages/AboutUs";
import CompanyLogin from "./Pages/CompanyLogin";
import CompanyProductManagement from "./Pages/CompanyProductManagement";
import CompanyProductManagementAdd from "./Pages/CompanyProductManagementAdd";
import CompanySalesSummary from "./Pages/CompanySalesSummary";
import CompanySalesHistory from "./Pages/CompanySalesHistory";
import CompanySignup from "./Pages/CompanySignUp";
import CustomerCart from "./Pages/CustomerCart";
import CustomerLogin from "./Pages/CustomerLogin";
import CustomerSignUp from "./Pages/CustomerSignUp";
import CustomerOrderHistory from "./Pages/CustomerOrderHistory";
import CustomerPaymentSuccess from "./Pages/CustomerPaymentSuccess";
import CustomerPaymentSuccessWithoutLuckyDraw from "./Pages/CustomerPaymentSuccessWithoutLuckyDraw";
import CustomerPaymentFail from "./Pages/CustomerPaymentFail";
import CustomerRefundFail from "./Pages/CustomerRefundFail";
import CustomerPurchase from "./Pages/CustomerPurchase";
import CustomerShowProduct from "./Pages/CustomerShowProduct";
import CustomerShowProductDetail from "./Pages/CustomerShowProductDetail";
import CustomerShowService from "./Pages/CustomerShowService";
import CustomerShowServiceDetail from "./Pages/CustomerShowServiceDetail";
import CustomerShowAllCompany from "./Pages/CustomerShowAllCompany";
import CustomerCompanyDetail from "./Pages/CustomerCompanyDetail";
import CustomerShowProductDetailCom from "./Pages/CustomerShowProductDetailCom";
import Error from "./Pages/Error";

//testing
import RequireAuthCom from "./Components/RequireAuthCom";
import RequireAuthCus from "./Components/RequireAuthCus";

function App() {
  return (
    <>
      <Routes>
        {/* About us */}
        <Route path="/" element={<AboutUs />} />

        {/* company */}
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/signup" element={<CompanySignup />} />
        <Route
          path="/company/sales_summary"
          element={
            <RequireAuthCom>
              <CompanySalesSummary />
            </RequireAuthCom>
          }
        />
        <Route
          path="/company/sales_history"
          element={
            <RequireAuthCom>
              <CompanySalesHistory />
            </RequireAuthCom>
          }
        >
        </Route>
        <Route
          path="/company/product_management"
          element={
            <RequireAuthCom>
              <CompanyProductManagement />
            </RequireAuthCom>
          }
        >
          <Route path="add" element={<CompanyProductManagementAdd />} />
        </Route>

        {/*  Customer */}
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route
          path="/customer/show_product"
          element={<CustomerShowProduct />}
        />
        <Route
          path="/customer/show_product/:productId"
          element={<CustomerShowProductDetail />}
        />

        {/* Show Service */}
        <Route
          path="/customer/show_service"
          element={<CustomerShowService />}
        />
        <Route
          path="/customer/show_service/:productId"
          element={<CustomerShowServiceDetail />}
        />

        {/* Show Company */}
        <Route
          path="/customer/show_company"
          element={<CustomerShowAllCompany />}
        />
        <Route
          path="/customer/show_company/:companyId"
          element={<CustomerCompanyDetail />}
        />

        <Route
          path="/customer/show_company/:companyId/:productId"
          element={<CustomerShowProductDetailCom />}
        />

        {/* Cart */}
        <Route
          path="/customer/cart"
          element={
            <RequireAuthCus>
              <CustomerCart />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/purchase"
          element={
            <RequireAuthCus>
              <CustomerPurchase />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/payment_success"
          element={
            <RequireAuthCus>
              <CustomerPaymentSuccess />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/payment_success/withoutLuckDraw"
          element={
            <RequireAuthCus>
              <CustomerPaymentSuccessWithoutLuckyDraw />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/cashback_fail"
          element={
            <RequireAuthCus>
              <CustomerRefundFail />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/payment_fail"
          element={
            <RequireAuthCus>
              <CustomerPaymentFail />
            </RequireAuthCus>
          }
        />
        <Route
          path="/customer/order_history"
          element={
            <RequireAuthCus>
              <CustomerOrderHistory />
            </RequireAuthCus>
          }
        >
        </Route>

        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
