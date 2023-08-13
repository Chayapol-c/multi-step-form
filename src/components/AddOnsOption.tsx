import { ChangeEventHandler } from "react";
import { planInfoAtom } from "../atom";
import { useAtom } from "jotai";
import checkmark from "../assets/images/icon-checkmark.svg";

type AddOnsOptionProps = {
  handleChange: ChangeEventHandler;
  modelValue: {
    id: number;
    label: string;
    description: string;
    moPrice: number;
    yrPrice: number;
  };
  isChecked: boolean;
};

function AddOnsOption({
  modelValue,
  handleChange,
  isChecked,
}: AddOnsOptionProps) {
  const [planInfo] = useAtom(planInfoAtom);

  const getPrice = () => {
    if (planInfo.isAnnual) {
      return `+$${modelValue.yrPrice} / yr`;
    }
    return `+$${modelValue.moPrice} / mo`;
  };

  return (
    <div key={modelValue.id} className="relative mb-4">
      <input
        type="checkbox"
        name="addOns"
        id="addOns"
        className="peer absolute inset-0 w-full border-none opacity-0 cursor-pointer"
        value={modelValue.id}
        onChange={handleChange}
        checked={isChecked}
      />
      <label
        htmlFor="addOns"
        className="inline-flex items-center w-full p-4  bg-white border border-gray-200 rounded-lg select-none peer-hover:border-purplish-blue peer-checked:border-purplish-blue hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50"
      >
        {isChecked ? (
          <div className="w-5 h-5 rounded-sm flex items-center justify-center bg-purplish-blue">
            <img
              src={checkmark}
              alt="checkmark"
              className="block w-3 h-3 rounded-sm"
            />
          </div>
        ) : (
          <div className="border w-5 h-5 border-light-gray rounded-sm"></div>
        )}

        <div className="mr-auto ml-4">
          <p className="font-bold text-marine-blue">{modelValue.label}</p>
          <p className="text-cool-gray">{modelValue.description}</p>
        </div>
        <p className="text-purplish-blue">{getPrice()}</p>
      </label>
    </div>
  );
}

export { AddOnsOption };
