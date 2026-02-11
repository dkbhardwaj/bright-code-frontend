import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the preview mode cookies
  res.clearPreviewData();

  // Redirect to the page they were viewing or home page
  const redirectUrl = (req.query.redirect as string) || "/";

  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
