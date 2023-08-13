type StepLabelProps = {
  stepNumber: string;
  label: string;
  isCurrentStep?: boolean;
};
function StepLabel({ stepNumber, label, isCurrentStep }: StepLabelProps) {
  return (
    <div className="flex gap-3 mb-8 items-center w-content">
      <div
        className={`border rounded-full aspect-square h-10 w-10 flex items-center justify-center ${
          isCurrentStep
            ? "bg-light-blue text-marine-blue border-purplish-blue"
            : "bg-transparent text-white border-white"
        }`}
      >
        {stepNumber}
      </div>
      <div className="flex-2">
        <p className="text-cool-gray uppercase text-sm">Step {stepNumber}</p>
        <p className="uppercase text-white font-medium">{label}</p>
      </div>
    </div>
  );
}

export { StepLabel };
