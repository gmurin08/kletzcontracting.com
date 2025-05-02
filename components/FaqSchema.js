// components/FaqSchema.js
import Script from 'next/script'
import faqs from '@/data/faqs'

export default function FaqSchema({ category }) {
  const faqList = faqs[category] || []
  if (!faqList.length) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  }

  return (
    <Script
      id={`faq-schema-${category}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 