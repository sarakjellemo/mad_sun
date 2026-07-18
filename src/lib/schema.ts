import { siteConfig } from "./metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Anna Amandusson",
    url: siteConfig.url,
    jobTitle: "Frilans Social Media Manager & Marknadsföringsstrateg",
    description: siteConfig.description,
    email: "annamatilda.amandusson@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/anna-amandusson-0ab32a14a/",
    ],
    knowsAbout: [
      "Social Media Marketing",
      "Content Creation",
      "Brand Strategy",
      "Event Marketing",
      "Digital Marketing",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "sv-SE",
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${siteConfig.url}${opts.path ?? ""}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    author: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "sv-SE",
  };
}
