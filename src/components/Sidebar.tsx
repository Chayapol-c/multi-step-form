import { StepLabel } from "./StepLabel";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

const STEP_LABEL = [
  {
    label: "your info",
    step: 1,
  },
  { label: "select plan", step: 2 },
  { label: "add-ons", step: 3 },
  { label: "summary", step: 4 },
];

function Sidebar() {
  return (
    <div
      className={`p-6 md:min-w-[274px] md:min-h-[568px] md:block flex justify-center items-center gap-x-6 relative`}
    >
      <img
        className="absolute top-0 left-0 w-content h-content w-full md:hidden -z-10"
        src={bgSidebarMobile}
        alt="mobile sidebar background"
      ></img>
      <img
        className="hidden md:block absolute top-0 left-0 -z-10 w-content h-content bg-cover"
        src={bgSidebarDesktop}
        alt="desktop sidebar background"
      />
      {STEP_LABEL.map((step, i) => (
        <StepLabel stepNumber={step.step} label={step.label} key={i} />
      ))}
    </div>
  );
}

export { Sidebar };
