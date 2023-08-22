import { useAtom } from "jotai";
import { currentStepAtom } from "../atom";

type StepLabelProps = {
  stepNumber: number;
  label: string;
};
function StepLabel({ stepNumber, label }: StepLabelProps) {
  const [currentStep] = useAtom(currentStepAtom);
  return (
    <div className="flex gap-3 md:mb-8 items-center w-content">
      <div
        className={`border rounded-full aspect-square h-10 w-10 flex items-center justify-center ${
          currentStep === stepNumber - 1 || currentStep ===stepNumber  
            ? "bg-light-blue text-marine-blue border-purplish-blue"
            : "bg-transparent text-white border-white"
        }`}
      >
        {stepNumber}
      </div>
      <div className="flex-2 md:block hidden">
        <p className="text-cool-gray uppercase text-sm">Step {stepNumber}</p>
        <p className="uppercase text-white font-medium">{label}</p>
      </div>
    </div>
  );
}

export { StepLabel };
