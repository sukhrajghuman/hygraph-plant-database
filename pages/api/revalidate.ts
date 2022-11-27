// pages/api/revalidate.ts

import path from "path";

import type { NextApiRequest, NextApiResponse } from "next";

const Log = (data: any, status: "SUCCESS" | "FAIL" = "SUCCESS") => {
  console.log({
    "@": new Date().getTime(),
    status,
    data,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    Log({ message: "Invalid token" }, "FAIL");
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    Log({ message: "Invalid request body" }, "FAIL");
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    // @TODO revaliate parent pages
    await res.revalidate(path.join(req.body?.data?.slug));
    await res.revalidate("/");
    Log({
      path: path.join(req.body?.data?.slug),
    });

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    Log(
      {
        message: "invalid request body",
        errror: JSON.stringify(err),
      },
      "FAIL"
    );
    return res.status(500).send("Error revalidating");
  }
}
