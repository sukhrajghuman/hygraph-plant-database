import { InferType, object, string } from "yup";

// Add public environment vars here
export const EnvSchema = object({
  CONTENT_URL: string().required().default(process.env.NEXT_PUBLIC_CONTENT_URL),
});

export type EnvData = InferType<typeof EnvSchema>;

export const env = EnvSchema.cast({}, { stripUnknown: true }) as EnvData;
