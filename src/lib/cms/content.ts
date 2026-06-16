import { cache } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  buildWhatsappUrl,
  defaultPracticeSettings,
  defaultThemeSettings,
  defaultUiLabels,
  getContrastTextColor,
  type PracticeSettings,
  type SocialLinkSettings,
  type ThemeSettings,
  type UiLabels
} from "@/lib/site";
import { isDevelopment, sanityClient } from "./client";
import { portableTextToPlainText } from "./portable-text";
import {
  aboutPageQuery,
  contactPageQuery,
  faqsQuery,
  homePageQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsListQuery,
  postsPageQuery,
  postsPreviewQuery,
  servicesPageQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery
} from "./queries";

const cmsFetchOptions = isDevelopment ? { cache: "no-store" as const } : { next: { revalidate: 60 } };

type HomePageData = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroPrimaryCta?: string;
  heroSecondaryCta?: string;
  approachEyebrow?: string;
  approachTitle?: string;
  approachBody?: string;
  approachPoints?: string[];
  servicesEyebrow?: string;
  servicesTitle?: string;
  servicesIntro?: string;
  processEyebrow?: string;
  processTitle?: string;
  processSteps?: Array<{ title?: string; description?: string }>;
  faqEyebrow?: string;
  faqTitle?: string;
  postsEyebrow?: string;
  postsTitle?: string;
  postsIntro?: string;
  postsPrimaryCta?: string;
  postsReadMoreLabel?: string;
  contactEyebrow?: string;
  contactTitle?: string;
  contactBody?: string;
  contactPrimaryCta?: string;
};

type FaqData = {
  question: string;
  answer: string;
};

type AboutPageData = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  mainImageUrl?: string;
  biography?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
  biographyTitle?: string;
  approach?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
  approachTitle?: string;
  experience?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
  experienceTitle?: string;
  testimonialsTitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

type ContactPageData = {
  title?: string;
  mapTitle?: string;
  whatsappFieldLabel?: string;
  emailFieldLabel?: string;
  addressFieldLabel?: string;
  scheduleFieldLabel?: string;
  formTitle?: string;
  formIntro?: string;
  nameFieldLabel?: string;
  emailInputLabel?: string;
  phoneInputLabel?: string;
  modalityFieldLabel?: string;
  messageFieldLabel?: string;
  modalityOptions?: string[];
  submitLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  closingTitle?: string;
  closingBody?: string;
};

type ServicesPageData = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  notes?: string[];
  closingTitle?: string;
  closingBody?: string;
};

export type PostsPageData = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  readMoreLabel?: string;
  sideEyebrow?: string;
  sideBody?: string;
  sideTopics?: string[];
};

type ServiceData = {
  title?: string;
  summary?: string;
};

type TestimonialData = {
  name?: string;
  quote?: string;
};

export type PostCardData = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImageUrl?: string;
  categories?: string[];
  publishedAt?: string;
  authorName?: string;
};

export type PostDetailData = {
  title?: string;
  excerpt?: string;
  slug?: string;
  coverImageUrl?: string;
  categories?: string[];
  publishedAt?: string;
  body?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
  authorName?: string;
  authorBio?: string;
};

type SiteSettingsData = {
  siteName?: string;
  brandTagline?: string;
  whatsappNumber?: string;
  bookingWhatsappLabel?: string;
  phoneLabel?: string;
  email?: string;
  address?: string;
  schedule?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  accentColor?: string;
  surfaceColor?: string;
  surfaceStrongColor?: string;
  mapEmbedUrl?: string;
  socialLinks?: SocialLinkSettings[];
  uiLabelsEs?: Partial<UiLabels>;
};

export const getSiteSettings = cache(async () => {
  try {
    return await sanityClient.fetch<SiteSettingsData | null>(siteSettingsQuery, {}, cmsFetchOptions);
  } catch {
    return null;
  }
});

export function mergePracticeSettings(data: SiteSettingsData | null | undefined): PracticeSettings {
  const whatsappNumber = data?.whatsappNumber || defaultPracticeSettings.whatsappNumber;

  return {
    whatsappNumber,
    whatsappUrl: buildWhatsappUrl(whatsappNumber),
    bookingWhatsappLabel: data?.bookingWhatsappLabel || defaultPracticeSettings.bookingWhatsappLabel,
    phoneLabel: data?.phoneLabel || defaultPracticeSettings.phoneLabel,
    email: data?.email || defaultPracticeSettings.email,
    address: data?.address || defaultPracticeSettings.address,
    schedule: data?.schedule || defaultPracticeSettings.schedule,
    mapEmbedUrl: data?.mapEmbedUrl || defaultPracticeSettings.mapEmbedUrl,
    socialLinks: data?.socialLinks?.length ? data.socialLinks : defaultPracticeSettings.socialLinks
  };
}

export function mergeThemeSettings(data: SiteSettingsData | null | undefined): ThemeSettings {
  const foregroundColor = data?.foregroundColor || defaultThemeSettings.foregroundColor;
  const accentColor = data?.accentColor || defaultThemeSettings.accentColor;

  return {
    backgroundColor: data?.backgroundColor || defaultThemeSettings.backgroundColor,
    foregroundColor,
    mutedColor: foregroundColor,
    accentColor,
    accentForegroundColor: getContrastTextColor(accentColor, foregroundColor),
    surfaceColor: data?.surfaceColor || defaultThemeSettings.surfaceColor,
    surfaceStrongColor: data?.surfaceStrongColor || defaultThemeSettings.surfaceStrongColor
  };
}

export function mergeUiLabels(data: SiteSettingsData | null | undefined): UiLabels {
  const source = data?.uiLabelsEs;

  return {
    homeLabel: source?.homeLabel || defaultUiLabels.homeLabel,
    aboutLabel: source?.aboutLabel || defaultUiLabels.aboutLabel,
    servicesLabel: source?.servicesLabel || defaultUiLabels.servicesLabel,
    postsLabel: source?.postsLabel || defaultUiLabels.postsLabel,
    contactLabel: source?.contactLabel || defaultUiLabels.contactLabel,
    headerWhatsappLabel: source?.headerWhatsappLabel || defaultUiLabels.headerWhatsappLabel,
    floatingBookingLabel: source?.floatingBookingLabel || defaultUiLabels.floatingBookingLabel,
    backToTopLabel: source?.backToTopLabel || defaultUiLabels.backToTopLabel
  };
}

export const getHomePageData = cache(async () => {
  try {
    const [homePage, faqs, services, contactPage, posts] = await Promise.all([
      sanityClient.fetch<HomePageData | null>(homePageQuery, {}, cmsFetchOptions),
      sanityClient.fetch<FaqData[]>(faqsQuery, {}, cmsFetchOptions),
      sanityClient.fetch<ServiceData[]>(servicesQuery, {}, cmsFetchOptions),
      sanityClient.fetch<ContactPageData | null>(contactPageQuery, {}, cmsFetchOptions),
      sanityClient.fetch<PostCardData[]>(postsPreviewQuery, {}, cmsFetchOptions)
    ]);

    return { homePage, faqs, services, contactPage, posts };
  } catch {
    return { homePage: null, faqs: [] as FaqData[], services: [] as ServiceData[], contactPage: null, posts: [] as PostCardData[] };
  }
});

export const getAboutPageData = cache(async () => {
  try {
    const [page, testimonials] = await Promise.all([
      sanityClient.fetch<AboutPageData | null>(aboutPageQuery, {}, cmsFetchOptions),
      sanityClient.fetch<TestimonialData[]>(testimonialsQuery, {}, cmsFetchOptions)
    ]);

    return { page, testimonials };
  } catch {
    return { page: null, testimonials: [] as TestimonialData[] };
  }
});

export const getServicesData = cache(async () => {
  try {
    return await sanityClient.fetch<ServiceData[]>(servicesQuery, {}, cmsFetchOptions);
  } catch {
    return [] as ServiceData[];
  }
});

export const getContactPageData = cache(async () => {
  try {
    return await sanityClient.fetch<ContactPageData | null>(contactPageQuery, {}, cmsFetchOptions);
  } catch {
    return null;
  }
});

export const getPostsData = cache(async () => {
  try {
    return await sanityClient.fetch<PostCardData[]>(postsListQuery, {}, cmsFetchOptions);
  } catch {
    return [] as PostCardData[];
  }
});

export const getPostsPageData = cache(async () => {
  try {
    return await sanityClient.fetch<PostsPageData | null>(postsPageQuery, {}, cmsFetchOptions);
  } catch {
    return null;
  }
});

export const getPostSlugs = cache(async () => {
  try {
    return await sanityClient.fetch<Array<{ slug: string }>>(postSlugsQuery, {}, cmsFetchOptions);
  } catch {
    return [] as Array<{ slug: string }>;
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  try {
    return await sanityClient.fetch<PostDetailData | null>(postBySlugQuery, { slug }, cmsFetchOptions);
  } catch {
    return null;
  }
});

export function mergeHomeDictionary(
  fallback: Dictionary,
  payload: { homePage: HomePageData | null; faqs: FaqData[]; services: ServiceData[]; contactPage: ContactPageData | null; posts: PostCardData[] }
): Dictionary {
  const { homePage, faqs, services, contactPage, posts } = payload;

  return {
    ...fallback,
    hero: {
      ...fallback.hero,
      eyebrow: homePage?.heroEyebrow || fallback.hero.eyebrow,
      title: homePage?.heroTitle || fallback.hero.title,
      subtitle: homePage?.heroSubtitle || fallback.hero.subtitle,
      description: homePage?.heroDescription || fallback.hero.description,
      primaryCta: homePage?.heroPrimaryCta || fallback.hero.primaryCta,
      secondaryCta: homePage?.heroSecondaryCta || fallback.hero.secondaryCta
    },
    approach: {
      ...fallback.approach,
      eyebrow: homePage?.approachEyebrow || fallback.approach.eyebrow,
      title: homePage?.approachTitle || fallback.approach.title,
      body: homePage?.approachBody || fallback.approach.body,
      points: homePage?.approachPoints?.length ? homePage.approachPoints : fallback.approach.points
    },
    services: {
      ...fallback.services,
      eyebrow: homePage?.servicesEyebrow || fallback.services.eyebrow,
      title: homePage?.servicesTitle || fallback.services.title,
      intro: homePage?.servicesIntro || fallback.services.intro,
      items: services.length
        ? services.map((service) => ({
            title: service.title || "",
            description: service.summary || ""
          }))
        : fallback.services.items
    },
    process: {
      ...fallback.process,
      eyebrow: homePage?.processEyebrow || fallback.process.eyebrow,
      title: homePage?.processTitle || fallback.process.title,
      steps:
        homePage?.processSteps?.length === fallback.process.steps.length
          ? homePage.processSteps.map((step, index) => ({
              title: step.title || fallback.process.steps[index]?.title || "",
              description: step.description || fallback.process.steps[index]?.description || ""
            }))
          : fallback.process.steps
    },
    faqPreview: {
      ...fallback.faqPreview,
      eyebrow: homePage?.faqEyebrow || fallback.faqPreview.eyebrow,
      title: homePage?.faqTitle || fallback.faqPreview.title,
      items: faqs.length ? faqs : fallback.faqPreview.items
    },
    postsPreview: {
      ...fallback.postsPreview,
      eyebrow: homePage?.postsEyebrow || fallback.postsPreview.eyebrow,
      title: homePage?.postsTitle || fallback.postsPreview.title,
      intro: homePage?.postsIntro || fallback.postsPreview.intro,
      primaryCta: homePage?.postsPrimaryCta || fallback.postsPreview.primaryCta,
      readMoreLabel: homePage?.postsReadMoreLabel || fallback.postsPreview.readMoreLabel,
      items: posts.length
        ? posts.map((post) => ({
            title: post.title || "",
            slug: post.slug || "",
            excerpt: post.excerpt || "",
            category: post.categories?.[0] || "",
            publishedAt: post.publishedAt || "",
            authorName: post.authorName || "",
            coverImageUrl: post.coverImageUrl || ""
          }))
        : fallback.postsPreview.items
    },
    contact: {
      ...fallback.contact,
      eyebrow: homePage?.contactEyebrow || fallback.contact.eyebrow,
      primaryCta: homePage?.contactPrimaryCta || fallback.contact.primaryCta,
      title: homePage?.contactTitle || contactPage?.title || fallback.contact.title,
      body: homePage?.contactBody || fallback.contact.body,
      whatsapp: contactPage?.whatsappFieldLabel || fallback.contact.whatsapp,
      email: contactPage?.emailFieldLabel || fallback.contact.email,
      address: contactPage?.addressFieldLabel || fallback.contact.address,
      schedule: contactPage?.scheduleFieldLabel || fallback.contact.schedule
    }
  };
}

export function mapAboutContent(
  fallback: {
    eyebrow: string;
    title: string;
    intro: string;
    mainImageUrl?: string;
    sections: readonly { title: string; body: string }[];
    testimonialsTitle: string;
    testimonials: readonly { name: string; quote: string }[];
    primaryCta: string;
    secondaryCta: string;
  },
  payload: { page: AboutPageData | null; testimonials: TestimonialData[] }
) {
  const { page: data, testimonials } = payload;

  if (!data && !testimonials.length) {
    return fallback;
  }

  return {
    ...fallback,
    eyebrow: data?.eyebrow || fallback.eyebrow,
    title: data?.title || fallback.title,
    intro: data?.intro || fallback.intro,
    mainImageUrl: data?.mainImageUrl || fallback.mainImageUrl,
    testimonialsTitle: data?.testimonialsTitle || fallback.testimonialsTitle,
    primaryCta: data?.primaryCta || fallback.primaryCta,
    secondaryCta: data?.secondaryCta || fallback.secondaryCta,
    testimonials: testimonials.length
      ? testimonials.map((testimonial) => ({
          name: testimonial.name || "",
          quote: testimonial.quote || ""
        }))
      : fallback.testimonials,
    sections: [
      {
        title: data?.biographyTitle || fallback.sections[0].title,
        body: portableTextToPlainText(data?.biography) || fallback.sections[0].body
      },
      {
        title: data?.approachTitle || fallback.sections[1].title,
        body: portableTextToPlainText(data?.approach) || fallback.sections[1].body
      },
      {
        title: data?.experienceTitle || fallback.sections[2].title,
        body: portableTextToPlainText(data?.experience) || fallback.sections[2].body
      }
    ]
  };
}

export const getServicesPageData = cache(async () => {
  try {
    return await sanityClient.fetch<ServicesPageData | null>(servicesPageQuery, {}, cmsFetchOptions);
  } catch {
    return null;
  }
});

export function mapServicesContent(
  fallback: {
    eyebrow: string;
    title: string;
    intro: string;
    services: readonly { title: string; body: string }[];
    notes: readonly string[];
    closingTitle: string;
    closingBody: string;
  },
  services: ServiceData[],
  pageData: ServicesPageData | null
) {
  if (!services.length && !pageData) {
    return fallback;
  }

  return {
    ...fallback,
    eyebrow: pageData?.eyebrow || fallback.eyebrow,
    title: pageData?.title || fallback.title,
    intro: pageData?.intro || fallback.intro,
    notes: pageData?.notes?.length ? pageData.notes : fallback.notes,
    closingTitle: pageData?.closingTitle || fallback.closingTitle,
    closingBody: pageData?.closingBody || fallback.closingBody,
    services: services.length
      ? services.map((service, index) => ({
          title: service.title || "",
          body: service.summary || fallback.services[index]?.body || fallback.services[0]?.body || ""
        }))
      : fallback.services
  };
}

export function mapContactContent(
  fallback: {
    title: string;
    closingTitle: string;
    closingBody: string;
    mapTitle: string;
    whatsappFieldLabel: string;
    emailFieldLabel: string;
    addressFieldLabel: string;
    scheduleFieldLabel: string;
    formTitle: string;
    formIntro: string;
    nameFieldLabel: string;
    emailInputLabel: string;
    phoneInputLabel: string;
    modalityFieldLabel: string;
    messageFieldLabel: string;
    modalityOptions: readonly string[];
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  },
  data: ContactPageData | null
) {
  if (!data) {
    return fallback;
  }

  return {
    ...fallback,
    title: data.title || fallback.title,
    closingTitle: data.closingTitle || fallback.closingTitle,
    closingBody: data.closingBody || fallback.closingBody,
    mapTitle: data.mapTitle || fallback.mapTitle,
    whatsappFieldLabel: data.whatsappFieldLabel || fallback.whatsappFieldLabel,
    emailFieldLabel: data.emailFieldLabel || fallback.emailFieldLabel,
    addressFieldLabel: data.addressFieldLabel || fallback.addressFieldLabel,
    scheduleFieldLabel: data.scheduleFieldLabel || fallback.scheduleFieldLabel,
    formTitle: data.formTitle || fallback.formTitle,
    formIntro: data.formIntro || fallback.formIntro,
    nameFieldLabel: data.nameFieldLabel || fallback.nameFieldLabel,
    emailInputLabel: data.emailInputLabel || fallback.emailInputLabel,
    phoneInputLabel: data.phoneInputLabel || fallback.phoneInputLabel,
    modalityFieldLabel: data.modalityFieldLabel || fallback.modalityFieldLabel,
    messageFieldLabel: data.messageFieldLabel || fallback.messageFieldLabel,
    modalityOptions: data.modalityOptions?.length ? data.modalityOptions : fallback.modalityOptions,
    submitLabel: data.submitLabel || fallback.submitLabel,
    successMessage: data.successMessage || fallback.successMessage,
    errorMessage: data.errorMessage || fallback.errorMessage
  };
}
