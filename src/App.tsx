import { PersonalInfoStep } from "./components/PersonalInfoStep";
import { Sidebar } from "./components/Sidebar";
import { SelectPlanStep } from "./components/SelectPlanStep";
import { PickAddOnsStep } from "./components/PickAddOnsStep";
import { SummaryStep } from "./components/SummaryStep";
import { FinishStep } from "./components/FinishStep";
import { useAtom } from "jotai";
import { currentStepAtom } from "./atom";

const stepComponents = [
  PersonalInfoStep,
  SelectPlanStep,
  PickAddOnsStep,
  SummaryStep,
  FinishStep,
];
function App() {
  const [currentStep] = useAtom(currentStepAtom);
  const renderForm = () => {
    if (currentStep < stepComponents.length) {
      const CurrentStep = stepComponents[currentStep];
      return <CurrentStep />;
    }
    return <></>;
  };

  return (
    <>
      <main className="flex md:items-center md:justify-center min-h-screen">
        <div className="flex sm:w-fit w-full md:flex-row flex-col md:p-4 shadow-lg md:rounded-lg relative">
          <Sidebar />
          {renderForm()}
        </div>
      </main>
    </>
  );
}

export default App;
