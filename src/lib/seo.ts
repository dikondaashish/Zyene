export const SITE_URL = "https://zyene.com"

export type Crumb = { name: string; path: string }

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function webPageJsonLd({
  path,
  name,
  description,
  crumbs,
}: {
  path: string
  name: string
  description: string
  crumbs: Crumb[]
}) {
  const url = absoluteUrl(path)
  const breadcrumb = breadcrumbJsonLd(crumbs)
  const { "@context": _context, ...breadcrumbNode } = breadcrumb
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      { ...breadcrumbNode, "@id": `${url}#breadcrumb` },
    ],
  }
}

/** Service page: webpage, breadcrumb, and the service itself, in one graph. */
export function servicePageJsonLd({
  path,
  name,
  description,
  serviceType,
  crumbs,
}: {
  path: string
  name: string
  description: string
  serviceType: string
  crumbs: Crumb[]
}) {
  const url = absoluteUrl(path)
  const { "@context": _context, ...breadcrumbNode } = breadcrumbJsonLd(crumbs)
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        ...breadcrumbNode,
        "@id": `${url}#breadcrumb`,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType,
        description,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    ],
  }
}
