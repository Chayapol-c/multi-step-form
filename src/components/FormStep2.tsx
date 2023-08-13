import { useFormik } from "formik";
import { FooterMenu } from "./FooterMenu";
import { FormLayout } from "./FormLayout";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import { PlanCard } from "./PlanCard";
import { currentStepAtom, planInfoAtom } from "../atom";
import { useAtom } from "jotai";

const planList = [
  {
    id: 1,
    planName: "arcade",
    moPrice: 9,
    yrPrice: 90,
    icon: ArcadeIcon,
  },
  {
    id: 2,
    planName: "advanced",
    moPrice: 12,
    yrPrice: 120,
    icon: AdvancedIcon,
  },
  {
    id: 3,
    planName: "pro",
    moPrice: 15,
    yrPrice: 150,
    icon: ProIcon,
  },
];

function FormStep2() {
  const [, setCurrentStep] = useAtom(currentStepAtom);
  const [planInfo, setPlanInfo] = useAtom(planInfoAtom);
  const formik = useFormik({
    initialValues: {
      planType: planInfo.planType,
      isAnnual: planInfo.isAnnual,
    },
    onSubmit: (values) => {
      setCurrentStep(3);
      const a = planList.filter((plan) => plan.planName === values.planType)[0];
      setPlanInfo({
        ...planInfo,
        planType: values.planType,
        isAnnual: values.isAnnual,
        planPrice: values.isAnnual ? a.yrPrice : a.moPrice,
      });
      console.log(values);
    },
  });

  return (
    <>
      <FormLayout
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
        onSubmit={formik.handleSubmit}
      >
        <div className="flex gap-4">
          {planList.map((plan) => (
            <PlanCard
              key={plan.id}
              planType={plan.planName}
              isAnnual={formik.values.isAnnual}
              isSelected={formik.values.planType === plan.planName}
              icon={plan.icon}
              price={formik.values.isAnnual ? plan.yrPrice : plan.moPrice}
              handleChange={formik.handleChange}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 py-4 bg-magnolia rounded-md mt-10">
          <p
            className={`capitalize  ${
              !formik.values.isAnnual
                ? "font-bold text-marine-blue"
                : "text-cool-gray"
            }`}
          >
            monthly
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={formik.values.isAnnual ? "checked" : ""}
              className="sr-only peer"
              name="isAnnual"
              onChange={formik.handleChange}
              checked={formik.values.isAnnual}
            />
            <div className="w-10 h-6 bg-gray-200 rounded-full peer dark:bg-marine-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
          </label>
          <p
            className={`capitalize  ${
              formik.values.isAnnual
                ? "font-bold text-marine-blue"
                : "text-cool-gray"
            }`}
          >
            yearly
          </p>
        </div>
        <FooterMenu hasBackBtn primaryBtnMessage="Next Step" />
      </FormLayout>
    </>
  );
}

export { FormStep2 };
