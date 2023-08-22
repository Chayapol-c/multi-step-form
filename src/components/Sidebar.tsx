import { StepLabel } from "./StepLabel";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import { currentStepAtom } from "../atom";
import { useAtom } from "jotai";

function Sidebar() {
  const [currentStep] = useAtom(currentStepAtom);

  return (
    <div
      className={`p-6 md:min-w-[274px] md:min-h-[568px] md:block flex justify-center items-center gap-x-6 relative`}
    >
      <img className="absolute top-0 left-0 w-content h-content w-full md:hidden -z-10" src={bgSidebarMobile} alt="mobile sidebar background"></img>
      <img className="hidden md:block absolute top-0 left-0 -z-10 w-content h-content bg-cover" src={bgSidebarDesktop} alt="desktop sidebar background" />
      <StepLabel
        stepNumber="1"
        label="your info"
        isCurrentStep={currentStep === 1}
      />
      <StepLabel
        stepNumber="2"
        label="select plan"
        isCurrentStep={currentStep === 2}
      />
      <StepLabel
        stepNumber="3"
        label="add-ons"
        isCurrentStep={currentStep === 3}
      />
      <StepLabel
        stepNumber="4"
        label="summary"
        isCurrentStep={currentStep >= 4}
      />
    </div>
  );
}

export { Sidebar };
