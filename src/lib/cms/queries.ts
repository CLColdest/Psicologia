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
    uiLabelsEn,
    socialLinks[]{
      label,
      href
    }
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage" && language == $language][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroPrimaryCta,
    heroSecondaryCta,
    heroVisualEyebrow,
    "heroImageUrl": heroImage.asset->url,
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
    contactEyebrow,
    contactTitle,
    contactBody,
    contactPrimaryCta
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && language == $language][0]{
    eyebrow,
    title,
    intro,
    highlights,
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
  *[_type == "servicesPage" && language == $language][0]{
    eyebrow,
    title,
    intro,
    notes,
    closingTitle,
    closingBody
  }
`;

export const postsPageQuery = groq`
  *[_type == "postsPage" && language == $language][0]{
    eyebrow,
    title,
    intro,
    readMoreLabel
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage" && language == $language][0]{
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
  *[_type == "service" && language == $language] | order(order asc, title asc) {
    title,
    summary
  }
`;

export const faqsQuery = groq`
  *[_type == "faq" && language == $language] | order(order asc, question asc) [0...3] {
    question,
    answer
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial" && language == $language] | order(order asc, name asc) {
    name,
    quote
  }
`;

export const postsPreviewQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc) [0...3] {
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
  *[_type == "post" && language == $language] | order(publishedAt desc) {
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
    language,
    "slug": slug.current
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && language == $language && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    categories,
    publishedAt,
    body,
    "authorName": author->name,
    "authorBio": author->bio
  }
`;
