import { FC, ReactElement, ReactNode } from "react";
import ThemeProvider from "src/theme/ThemeProvider";

import {
  render as renderTestingLibrary,
  RenderOptions,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => require("next-router-mock"));

interface ProvidersProps {
  children?: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export * from "@testing-library/react";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  allowLoading?: boolean;
}

export const render = async (
  ui: ReactElement,
  options?: CustomRenderOptions
) => {
  const { allowLoading, ...renderOptions } = options ?? {};

  const result = renderTestingLibrary(ui, {
    wrapper: ({ children }) => <Providers>{children}</Providers>,
    ...renderOptions,
  });

  const user = userEvent.setup();

  return {
    ...result,
    user,
  };
};
