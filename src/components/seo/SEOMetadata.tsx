export interface SEOMetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noindex = false
}: SEOMetadataProps) {
  const fullTitle = title.includes('Zyene') ? title : `${title} | Zyene`;
  const fullCanonical = canonical ? `https://zyene.com${canonical}` : 'https://zyene.com';

  return {
    title: fullTitle,
    description: description,
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      type: ogType,
      url: fullCanonical,
      images: [
        {
          url: `https://zyene.com${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: 'Zyene',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [`https://zyene.com${ogImage}`],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Zyene' }],
    keywords: 'marketing, AEO, SEO, content marketing, email marketing, demand generation',
  };
}
