import { Card } from "@uni-design-system/uni-react";
import "./App.css";
import { ResumeComponent } from "./components/resume/resume.component";
import { GeorgeEnglishResume } from "./data/GeorgeEnglishResume";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card cardType="elevated" colorToken="surface">
        <ResumeComponent resume={GeorgeEnglishResume} />
      </Card>
    </div>
  );
}

export default App;
