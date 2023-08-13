import { FormStep1 } from "./components/FormStep1";
import { Sidebar } from "./components/Sidebar";
import { FormStep2 } from "./components/FormStep2";
import { FormStep3 } from "./components/FormStep3";
import { FormStep4 } from "./components/FormStep4";
import { FormStep5 } from "./components/FormStep5";
import { useAtom } from "jotai";
import { currentStepAtom } from "./atom";

function App() {

  const [currentStep] = useAtom(currentStepAtom)
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      case 3:
        return <FormStep3 />;
      case 4:
        return <FormStep4 />;
      case 5:
        return <FormStep5 />
      default:
        return <FormStep1 />;
    }
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <div className="flex p-4 shadow-lg rounded-lg">
          <Sidebar />
          {renderForm()}
        </div>
      </main>
    </>
  );
}

export default App;
