import { atom } from "jotai"


const personalInfoAtom = atom({
  name: "",
  email: "",
  phoneNumber: ""
})

type PlanInfo = {
  planType: string;
  planPrice: number;
  isAnnual: boolean;
}

type AddOn = {
  id: number,
  label: string,
  description: string;
  moPrice: number;
  yrPrice: number;
  checked: boolean;
}

const planInfoAtom = atom<PlanInfo>({
  planType: "arcade",
  planPrice: 9,
  isAnnual: false,
})

const addOnsAtom = atom<AddOn[]>([
  {
    id: 1,
    label: "Online service",
    description: "Access to multiplayer games",
    moPrice: 1,
    yrPrice: 10,
    checked: false,
  },
  {
    id: 2,
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    moPrice: 2,
    yrPrice: 20,
    checked: false,
  },
  {
    id: 3,
    label: "Customizable profile",
    description: "Custom theme on your profile",
    moPrice: 2,
    yrPrice: 20,
    checked: false,
  },
])

const readWriteAddOns = atom(
  (get) => get(addOnsAtom),
  (get, set, newVal: AddOn) => {
    const addOns = get(addOnsAtom)
    console.log(addOns.map(addOn => {
      if (addOn.id === newVal.id) {
        return newVal
      } return addOn
    }))
    set(addOnsAtom, addOns.map(addOn => {
      if (addOn.id === newVal.id) {
        return newVal
      } return addOn
    }))
  }
)

const readCheckedAddOns = atom(
  (get) => get(addOnsAtom).filter(addOn => addOn.checked),
)

const currentStepAtom = atom(0)

export { personalInfoAtom, currentStepAtom, planInfoAtom, readWriteAddOns, readCheckedAddOns }
export type { PlanInfo }