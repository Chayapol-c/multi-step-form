import thankyouIcon from "../assets/images/icon-thank-you.svg";

function FinishStep() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-[660px]">
        <img src={thankyouIcon} alt="thankyou icon" className="mb-8" />

        <p className="text-marine-blue text-3xl font-bold mb-4">Thank you!</p>
        <p className="text-cool-gray max-w-md mx-auto text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </>
  );
}

export { FinishStep };
