import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_CONTENT_URL,
  documents: "src/**/*.ts",
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
