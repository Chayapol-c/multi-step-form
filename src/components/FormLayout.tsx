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
      <div className="py-8 px-24 min-w-[660px]">
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
