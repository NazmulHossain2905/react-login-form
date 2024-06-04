import { useState } from "react";
import DoctorLogin from "./components/DoctorLogin";
import PricingPage from "./components/PricingPage";

export default function App() {
  const [renderScreen, setRenderScreen] = useState("login");

  return renderScreen === "login" ? (
    <DoctorLogin handleLoginClick={() => setRenderScreen("pricing")} />
  ) : (
    <PricingPage />
  );
}
