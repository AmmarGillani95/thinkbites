import sanitizeHtml from "sanitize-html";

export default function sanitizedHTML(html) {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      p: ["style"],
      span: ["style"],
      h1: ["style"],
      h2: ["style"],
      h3: ["style"],
      h4: ["style"],
      a: ["href"],
    },
    allowedStyles: {
      "*": {
        "text-align": [/^left$/, /^right$/, /^center$/],
      },
      p: {
        "text-align": [/^left$/, /^right$/, /^center$/],
      },
    },
  });
}
