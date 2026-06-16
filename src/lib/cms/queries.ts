import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    brandTagline,
    whatsappNumber,
    bookingWhatsappLabel,
    phoneLabel,
    email,
    address,
    schedule,
    backgroundColor,
    foregroundColor,
    accentColor,
    surfaceColor,
    surfaceStrongColor,
    mapEmbedUrl,
    uiLabelsEs,
    socialLinks[]{
      label,
      href
    }
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroPrimaryCta,
    heroSecondaryCta,
    approachEyebrow,
    approachTitle,
    approachBody,
    approachPoints,
    servicesEyebrow,
    servicesTitle,
    servicesIntro,
    processEyebrow,
    processTitle,
    processSteps[]{
      title,
      description
    },
    faqEyebrow,
    faqTitle,
    postsEyebrow,
    postsTitle,
    postsIntro,
    postsPrimaryCta,
    postsReadMoreLabel,
    contactEyebrow,
    contactTitle,
    contactBody,
    contactPrimaryCta
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    eyebrow,
    title,
    intro,
    "mainImageUrl": mainImage.asset->url,
    biography,
    biographyTitle,
    approach,
    approachTitle,
    experience,
    experienceTitle,
    testimonialsTitle,
    primaryCta,
    secondaryCta
  }
`;

export const servicesPageQuery = groq`
  *[_type == "servicesPage"][0]{
    eyebrow,
    title,
    intro,
    notes,
    closingTitle,
    closingBody
  }
`;

export const postsPageQuery = groq`
  *[_type == "postsPage"][0]{
    eyebrow,
    title,
    intro,
    readMoreLabel,
    sideEyebrow,
    sideBody,
    sideTopics
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]{
    title,
    mapTitle,
    whatsappFieldLabel,
    emailFieldLabel,
    addressFieldLabel,
    scheduleFieldLabel,
    formTitle,
    formIntro,
    nameFieldLabel,
    emailInputLabel,
    phoneInputLabel,
    modalityFieldLabel,
    messageFieldLabel,
    modalityOptions,
    submitLabel,
    successMessage,
    errorMessage,
    closingTitle,
    closingBody
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, title asc) {
    title,
    summary
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc, question asc) [0...3] {
    question,
    answer
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc, name asc) {
    name,
    quote
  }
`;

export const postsPreviewQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    categories,
    publishedAt,
    "authorName": author->name
  }
`;

export const postsListQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    categories,
    publishedAt,
    "authorName": author->name
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    "coverImage": select(
      defined(coverImage.asset) => {
        "url": coverImage.asset->url,
        "width": coverImage.asset->metadata.dimensions.width,
        "height": coverImage.asset->metadata.dimensions.height,
        "alt": coalesce(coverImage.alt, title)
      }
    ),
    "galleryImages": galleryImages[]{
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
      "alt": coalesce(alt, ^.title)
    },
    categories,
    publishedAt,
    body,
    "authorName": author->name,
    "authorBio": author->bio
  }
`;
