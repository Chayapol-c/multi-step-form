import { FormEventHandler, ReactNode } from "react";

type FormLayoutProps = {
  children: ReactNode;
  description: string;
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

function FormLayout({
  children,
  title,
  description,
  onSubmit,
}: FormLayoutProps) {
  return (
    <>
      <div className="md:py-8 md:px-24 px-8 py-10 md:min-w-[660px] bg-white rounded-md md:m-6 mx-6 mb-32">
        <form onSubmit={onSubmit} className="h-full flex flex-col">
          <header className="mb-8">
            <h1 className="text-3xl font-bold capitalize text-marine-blue mb-2">
              {title}
            </h1>
            <p className="text-cool-gray">{description}</p>
          </header>
          {children}
        </form>
      </div>
    </>
  );
}

export { FormLayout };
