import thankyouIcon from "../assets/images/icon-thank-you.svg";

function FinishStep() {
  return (
    <>
      <div className="md:py-8 md:px-24 px-8 py-16 md:min-w-[660px] bg-white rounded-md md:m-6 mx-6 mb-32 text-center">
        <img src={thankyouIcon} alt="thankyou icon" className="mb-8 mx-auto" />

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
