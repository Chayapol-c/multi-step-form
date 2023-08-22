import { useFormik } from "formik";
import { FormLayout } from "./FormLayout";
import { FooterMenu } from "./FooterMenu";
import { currentStepAtom, planInfoAtom, readWriteAddOns, readCheckedAddOns } from "../atom";
import { useAtom } from "jotai";

function SummaryStep() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [addOns] = useAtom(readWriteAddOns)
  const [checkedAddOns] = useAtom(readCheckedAddOns)
  const [planInfo] = useAtom(planInfoAtom);
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      setCurrentStep(currentStep + 1);
    },
  });

  const getPrice = (addOn: {
    id: number;
    label: string;
    description: string;
    moPrice: number;
    yrPrice: number;
    checked: boolean;
  }) => {
    if (planInfo.isAnnual) {
      return `+$${addOn.yrPrice}/yr`;
    }
    return `+$${addOn.moPrice}/mo`;
  };

  const getTotalPrice = () => {
    return (
      planInfo.planPrice +
      checkedAddOns.reduce((prev, curr) => {
        if (curr.checked) {
          if (planInfo.isAnnual) {
            return prev + curr.yrPrice;
          }
          return prev + curr.moPrice;
        }
        return prev;
      }, 0)
    );
  };
  return (
    <>
      <FormLayout
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
        onSubmit={formik.handleSubmit}
      >
        <div className="bg-magnolia rounded-md px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="capitalize font-bold">
                {planInfo.planType}({planInfo.isAnnual ? "yearly" : "yonthly"})
              </p>
              <button
                className="text-cool-gray underline capitalize hover:text-purplish-blue"
                onClick={() => setCurrentStep(2)}
              >
                change
              </button>
            </div>
            <p className="font-bold text-marine-blue">
              ${planInfo.planPrice}/{planInfo.isAnnual ? "yr" : "mo"}
            </p>
          </div>
          {addOns.length > 0 ? (
            <div className="border-t border-light-gray mt-4">
              {addOns.map((addon) => {
                if (addon.checked) {
                  return (
                    <div key={addon.id} className="flex justify-between mt-4">
                      <p className="text-cool-gray">{addon.label}</p>
                      <p className="text-marine-blue">{getPrice(addon)}</p>
                    </div>
                  );
                }
              })}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between items-center px-6 py-6">
          <p className="text-cool-gray">
            Total (per {planInfo.isAnnual ? "year" : "month"})
          </p>
          <p className="text-purplish-blue font-bold text-lg">
            ${getTotalPrice()}/{planInfo.isAnnual ? "yr" : "mo"}
          </p>
        </div>
        <FooterMenu
          hasBackBtn
          primaryBtnMessage="Confirm"
          primaryBtnColor="bg-purplish-blue"
        />
      </FormLayout>
    </>
  );
}

export { SummaryStep };
