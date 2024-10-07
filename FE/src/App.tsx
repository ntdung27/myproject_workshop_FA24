import { Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import SignUpPage from "./pages/(auth)/signup/page";
import HomePage from "./pages/(website)/home/page";
import LayoutWebsite from "./pages/(website)/layout";
import NotFoundPage from "./pages/(website)/404/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import ProductsList from "./pages/(website)/products-list/page";
import ContactPage from "./pages/(website)/contact/page";
import AboutPage from "./pages/(website)/about/page";
import ProductDetail from "./pages/(website)/product-detail/page";
import ProductAddPage from "./pages/(admin)/products/add/page";
import ProductUpdatePage from "./pages/(admin)/products/update/page";
import CartPage from "./pages/(website)/cart/page";
import BillingDetail from "./pages/(website)/bill/page";
import AdminProductsPage from "./pages/(admin)/products/page";

function App() {
  return (
    <>
      <Routes>
        {/* Layout chứa header, footer. Homepage và Signup đều dùng chung 1 layout nên đặt Route Component Layout ở ngoài cùng */}
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="products-list" element={<ProductsList />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="billing-detail" element={<BillingDetail />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        {/* Trang Admin */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products-list" element={<AdminProductsPage />} />
          <Route path="product-add" element={<ProductAddPage />} />
          <Route path="product-update" element={<ProductUpdatePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
