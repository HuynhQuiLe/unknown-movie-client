import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import DetailsAndBookingLayout from "./components/Layout/DetailsAndBookingLayout/DetailsAndBookingLayout";
import BookingPage from "./pages/Booking/BookingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="movies" element={<DetailsAndBookingLayout />}>
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
