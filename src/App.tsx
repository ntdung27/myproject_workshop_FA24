import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/(auth)/signup/page";
import HomePage from "./pages/(website)/home/page";
import LayoutWebsite from "./pages/(website)/layout";
import NotFoundPage from "./pages/(website)/404/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
