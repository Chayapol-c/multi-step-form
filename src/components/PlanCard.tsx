import { ChangeEventHandler } from "react";

type PlanCardProps = {
  planType: string;
  isAnnual: boolean;
  isSelected: boolean;
  icon: string;
  price: number;
  handleChange: ChangeEventHandler;
};

function PlanCard({
  planType,
  isAnnual,
  isSelected,
  icon,
  price,
  handleChange,
}: PlanCardProps) {
  return (
    <div
      className={`plan-card ${
        isSelected ? "border-purplish-blue bg-magnolia" : ""
      }`}
    >
      <img src={icon} alt={`${planType} plan icon`} className="w-12 h-12 mb-10" />
      <label
        htmlFor={planType}
        className="text-marine-blue capitalize font-bold"
      >
        {planType}
      </label>
      <input
        type="radio"
        name="planType"
        value={planType}
        onChange={handleChange}
        className="hidden-radio"
      />
      <>
        <p className="text-cool-gray text-sm">
          ${price}/{isAnnual ? "yo" : "mo"}
        </p>
        {isAnnual ? <p className="text-marine-blue text-sm">2 months free</p> : null}
      </>
    </div>
  );
}

export { PlanCard };
