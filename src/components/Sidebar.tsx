import { StepLabel } from "./StepLabel";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"
import { currentStepAtom } from "../atom";
import { useAtom } from "jotai";

function Sidebar() {
  const [currentStep] = useAtom(currentStepAtom)
  return (
    <div
      className={`p-6 bg-sidebar-desktop min-w-[274px] min-h-[568px]`}
      style={{backgroundImage: `url(${bgSidebarDesktop})`}}
    >
      <StepLabel stepNumber="1" label="your info" isCurrentStep={currentStep === 1}/>
      <StepLabel stepNumber="2" label="select plan" isCurrentStep={currentStep === 2}/>
      <StepLabel stepNumber="3" label="add-ons" isCurrentStep={currentStep === 3}/>
      <StepLabel stepNumber="4" label="summary" isCurrentStep={currentStep >= 4}/>
    </div>
  );
}

export { Sidebar };
