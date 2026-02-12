import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect } = req.query;

  console.log('[Exit Preview API] Clearing preview mode', {
    redirectTo: redirect || '/',
    timestamp: new Date().toISOString()
  });

  // Clear the preview mode cookies
  res.clearPreviewData();

  // Redirect back to the page or home
  const redirectUrl = (redirect as string) || '/';
  console.log('[Exit Preview API] Redirecting to:', redirectUrl);

  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
