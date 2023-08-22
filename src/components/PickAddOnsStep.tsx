import { useFormik, FormikProps } from "formik";
import { FooterMenu } from "./FooterMenu";
import { FormLayout } from "./FormLayout";
import { AddOnsOption } from "./AddOnsOption";
import { currentStepAtom, readWriteAddOns } from "../atom";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

type AddOns = {
  id: number;
  label: string;
  description: string;
  moPrice: number;
  yrPrice: number;
  checked: boolean;
};

function PickAddOnsStep() {
  const [, setCurrentStep] = useAtom(currentStepAtom);
  const [addOns, setAddOns] = useAtom(readWriteAddOns)

  const formik: FormikProps<{
    addOns: AddOns[];
  }> = useFormik<{
    addOns: AddOns[];
  }>({
    initialValues: {
      addOns: addOns,
    },
    onSubmit: () => {
      setCurrentStep(4);
    },
  });

  return (
    <>
      <FormLayout
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
        onSubmit={formik.handleSubmit}
      >
        <div role="group" aria-labelledby="checkbox-group">
          {formik.values.addOns.map((addOns) => (
            <AddOnsOption
              key={addOns.id}
              handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                const updateAddOns = formik.values.addOns.find(addOn => (addOn.id === Number(event.target.value)))
                if (updateAddOns) {
                  setAddOns({...updateAddOns, checked: event.target.checked})
                  formik.setFieldValue("addOns", formik.values.addOns.map(addOn => {
                    if (addOn.id === Number(event.target.value)) {
                      return {...addOn, checked: event.target.checked}
                    } return addOn
                  }))
                }
              }}
              modelValue={addOns}
              isChecked={addOns.checked}
            />
          ))}
        </div>
        <FooterMenu hasBackBtn primaryBtnMessage="Next Step" />
      </FormLayout>
    </>
  );
}

export { PickAddOnsStep };
