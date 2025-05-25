import { useState } from "react";
import Portfolio from "./components/Portfolio";
import ContactFooterSection from "./components/ContactFooterSection";
import LeadershipTimeline from "./components/LeadershipTimeline";

function App() {
  return (
    <>
      <Portfolio />
      <LeadershipTimeline />
      <ContactFooterSection />
    </>
  );
}

export default App;
