// Temporary preview route for the hardcoded static header.
// Delete this file once the first real static page is in place.
import type { NextPageWithLayout } from "./_app";

const HeaderPreview: NextPageWithLayout = () => {
  return (
    <div className="container" style={{ minHeight: "60vh", paddingTop: 40 }}>
      <h1>Static header preview</h1>
      <p>This page renders the hardcoded header (no WordPress requests).</p>
    </div>
  );
};

HeaderPreview.staticLayout = true;

export default HeaderPreview;
