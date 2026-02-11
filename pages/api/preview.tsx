import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, id, type, slug } = req.query;
  console.log("----------",req.query)

  if (secret !== process.env.NEXTJS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  if (!id || !type) {
    return res.status(400).json({ message: "Missing params" });
  }

  res.setPreviewData({});

  let redirectUrl = "/";
  if (type === "page") redirectUrl = `/${slug}?preview`;
  if (type === "post") redirectUrl = `/blog/${slug}?preview`;

  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
