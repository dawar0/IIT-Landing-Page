import "./App.css";
import ApplicationDeadline from "./components/ApplicationDeadline/ApplicationDeadline";
import ProgrammeHighlights from "./components/ProgrammeHighlights/ProgrammeHighlights";
import Description from "./components/Description/Description";
import ProgrammeStats from "./components/ProgrammeStats/ProgrammeStats";
import ProgrammeContent from "./components/ProgrammeContent/ProgrammeContent";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ApplicationDeadline />
      <Description />
      <ProgrammeStats />
      <ProgrammeHighlights />
      <ProgrammeContent />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
