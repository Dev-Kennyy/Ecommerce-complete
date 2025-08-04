import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const MainHome = lazy(() => import("./pages/MainHome.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUp/PageSignUp.jsx"));
const AppLayOut = lazy(() => import("./pages/AppLayOut.jsx"));
const Login = lazy(() => import("./pages/SignUp/Login.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ClickedProduct = lazy(() => import("./pages/ClickedProduct.jsx"));
const ManageAccount = lazy(() => import("./pages/ManageAccount.jsx"));
const PaymentPage = lazy(() => import("./pages/PaymentPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const AllProduct = lazy(() => import("./pages/AllProduct.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppLayOut />}>
            <Route index element={<MainHome />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<ClickedProduct />} />
            <Route
              path="Cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <ManageAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="CheckOut"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
            <Route path="Store" element={<AllProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
