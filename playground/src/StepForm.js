import React from "react"
import { Steps, Button, message } from 'antd';

import flows from "./flows"
import ContPreparationsChecks from "./ContPreparationChecks"
import ApplicationChecks from "./ApplicationChecks"
import ContractChecks from "./ContractChecks"
import ContPreparationChecks from "./ContPreparationChecks"


const { Step } = Steps;

// object 1
//申込
const applicationList = flows[0]["申込"]
const applicationsOptions = Object.keys(applicationList)
const applicationChecked = applicationsOptions.map(key => applicationList[key] ? key : null).filter(Boolean)


//契約準備
const contPreparationList = flows[0]["契約準備"]
const contPreparationOptions = Object.keys(contPreparationList)
const contPreparationChecked = contPreparationOptions.map(key => contPreparationList[key] ? key : null).filter(Boolean)
console.log(contPreparationOptions)
console.log(contPreparationChecked)

//契約
const contractList = flows[0]["契約"]
const contractOptions = Object.keys(contractList)
const contractChecked = contractOptions.map(key => contractOptions[key] ? key : null).filter(Boolean)

//入居準備
const moveInPreplist = flows[0]["入居準備"]
const moveInPrepOptions =Object.keys(moveInPreplist)
const moveInPrepChecked = moveInPrepOptions.map(key => moveInPreplist[key] ? key : null).filter(Boolean)





const steps = [
  {
    title: '申込/審査',
    content: <ApplicationChecks 
                plainOptions={applicationsOptions}
                defaultCheckedList={applicationChecked}
            />,
  },
  {
    title: '契約準備',
    content: <ContPreparationsChecks 
                plainOptions={contPreparationOptions}
                defaultCheckedList={contPreparationChecked}
            />,
  },
  {
    title: '契約/入金',
    content: <ContractChecks 
                plainOptions={contractOptions}
                defaultCheckedList={contractChecked}
            />,
  },
  {
    title: '入居準備',
    content:<ContPreparationChecks 
                plainOptions={moveInPrepOptions}
                defaultCheckedList={moveInPrepChecked}
            />,
  },
];

const StepForm = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content text-center">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StepForm
  


