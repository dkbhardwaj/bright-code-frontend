import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, id, type, slug } = req.query;

  // Log preview request for debugging
  console.log('[Preview API] Request received:', {
    hasSecret: !!secret,
    id,
    type,
    slug,
    timestamp: new Date().toISOString()
  });

  // Validate secret
  if (!secret) {
    console.error('[Preview API] Error: No secret provided');
    return res.status(401).json({
      message: "Authentication required",
      error: "Missing preview secret. Please provide a valid secret parameter.",
      hint: "URL format: /api/preview?secret=YOUR_SECRET&id=PAGE_ID&type=page&slug=page-slug"
    });
  }

  if (secret !== process.env.NEXTJS_PREVIEW_SECRET) {
    console.error('[Preview API] Error: Invalid secret provided');
    return res.status(401).json({
      message: "Invalid secret",
      error: "The provided secret does not match the configured preview secret.",
      hint: "Verify that NEXTJS_PREVIEW_SECRET is set correctly in both WordPress and Next.js"
    });
  }

  // Validate required params
  const missingParams: string[] = [];
  if (!id) missingParams.push('id');
  if (!type) missingParams.push('type');
  if (!slug) missingParams.push('slug');

  if (missingParams.length > 0) {
    console.error('[Preview API] Error: Missing parameters:', missingParams);
    return res.status(400).json({
      message: "Missing required parameters",
      error: `The following parameters are required but missing: ${missingParams.join(', ')}`,
      missingParams,
      hint: "URL format: /api/preview?secret=YOUR_SECRET&id=PAGE_ID&type=page&slug=page-slug"
    });
  }

  // Validate post type
  const validTypes = ['page', 'post'];
  if (!validTypes.includes(type as string)) {
    console.error('[Preview API] Error: Invalid post type:', type);
    return res.status(400).json({
      message: "Invalid post type",
      error: `Post type must be one of: ${validTypes.join(', ')}`,
      providedType: type,
      validTypes
    });
  }

  // Enable preview mode and store the post ID and type
  console.log('[Preview API] Enabling preview mode for:', { id, type, slug });
  res.setPreviewData({
    id: id,
    type: type
  });

  // Redirect to the appropriate page
  let redirectUrl = "/";
  if (type === "page") redirectUrl = `/${slug}`;
  if (type === "post") redirectUrl = `/blog/${slug}`;

  console.log('[Preview API] Redirecting to:', redirectUrl);
  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
