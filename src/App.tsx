import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RolePage from "./pages/RolePage";
import ProfilePage from "./pages/ProfilePage";
import SurveyPage from "./pages/SurveyPage";
import MatchesPage from "./pages/MatchesPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const goToPage = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar goToPage={goToPage} />
      {currentPage === "login" && <LoginPage goToPage={goToPage} />}
      {currentPage === "role" && <RolePage goToPage={goToPage} />}
      {currentPage === "profile" && <ProfilePage goToPage={goToPage} />}
      {currentPage === "survey" && <SurveyPage goToPage={goToPage} />}
      {currentPage === "matches" && <MatchesPage goToPage={goToPage} />}
      {currentPage === "success" && <SuccessPage goToPage={goToPage} />}
    </>
  );
}
