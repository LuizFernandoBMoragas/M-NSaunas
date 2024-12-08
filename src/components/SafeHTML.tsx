"use client";

import DOMPurify from "isomorphic-dompurify";

const SafeHTML = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
};

export default SafeHTML;