import { currentStepAtom } from "../atom";
import { useAtom } from "jotai";

type FooterMenuProps = {
  hasBackBtn?: boolean;
  primaryBtnMessage: string;
  primaryBtnColor?: string;
};

function FooterMenu({
  hasBackBtn,
  primaryBtnMessage,
  primaryBtnColor = "bg-marine-blue",
}: FooterMenuProps) {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  return (
    <div className="flex items-center justify-between mt-auto capitalize">
      {hasBackBtn ? (
        <button
          className="capitalize text-cool-gray hover:text-marine-blue font-medium"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          go back
        </button>
      ) : null}
      <button
        type="submit"
        className={`${primaryBtnColor} transition-opacity ease-in delay-75 hover:opacity-70 px-6 py-3 rounded-md text-white ml-auto cursor-pointer`}
      >
        {primaryBtnMessage}
      </button>
    </div>
  );
}

export { FooterMenu };
