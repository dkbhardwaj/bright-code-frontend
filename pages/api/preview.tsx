import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, id, type, slug } = req.query;

  // Validate secret
  if (secret !== process.env.NEXTJS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  // Validate required params
  if (!id || !type || !slug) {
    return res.status(400).json({ message: "Missing required parameters: id, type, and slug are required" });
  }

  // Enable preview mode and store the post ID and type
  res.setPreviewData({
    id: id,
    type: type
  });

  // Redirect to the appropriate page
  let redirectUrl = "/";
  if (type === "page") redirectUrl = `/${slug}`;
  if (type === "post") redirectUrl = `/blog/${slug}`;

  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
