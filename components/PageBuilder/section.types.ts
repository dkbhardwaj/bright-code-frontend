interface ThemeImage {
  light: string;
  dark: string;
}

export interface HeroBannerBlade {
  fieldGroupName: 'PagebuilderSectionsHeroBannerLayout';
  sectionId?: string;
  theme?: 'light' | 'dark';
  image: {
    bg?: ThemeImage;
    leftIcons?: ThemeImage;
    rightImg?: ThemeImage;
    node: {
      altText: string;
      guid: string;
      sourceUrl: string;
    };
  };
  title: {
    titlePrefix: string;
    titleGradient: string;
    titleSuffix: string;
  };
  varient: string;
  subtitle: string;
  textUnderCta: string;
  cta: {
    link: {
      target: boolean;
      linkUrl: string;
      linkText: string;
      classname: string;
    };
  }[];
}

export interface IntroductionBlade {
  fieldGroupName: 'PagebuilderSectionsIntroductionLayout';
  sectionId?: string;
  eyebrowText?: string;
  introTitle: string;
  textAlighment: string;
  sub?: string;
  buttonText?: string;
  buttonLink?: string;
  theme?: 'light' | 'dark';
  sectionPadding: string[];
  link: {
    classname: string;
    fieldGroupName: string;
    linkText: string;
    linkUrl: string;
    target: string;
  }
}

export interface TimelineViewBlade {
  fieldGroupName: 'PagebuilderSectionsTimelineViewLayout';
  sectionId?: string;
  theme?: 'light' | 'dark';
  link?: {
    classname: string;
    linkText: string;
    linkUrl: string;
    target: boolean;
  };
  sectionPadding?: string[];
  timelineItems?: {
    item: string;
  }[];
}

export interface ImageWithContentBlade {
  imageOnLeft: boolean;
  fieldGroupName: 'PagebuilderSectionsImageWithContentLayout';
  sectionId?: string;
  timageOnLeft: boolean;

  image: {
    node: {
      altText: string;
      sourceUrl: string;
    }
  };
  eyebrowText: string;
  imageWithContentTitle: string;
  blurb: string;
  link: {
    target: boolean,
    linkUrl: string,
    linkText: string,
    classname: string,
  };
  buttonText: string;
  buttonLink: string;
  theme?: "light" | "dark";
  sectionPadding: string[];
}

export interface ColThreeCardsBlade {
  fieldGroupName: 'PagebuilderSectionsColThreeCardsLayout';
  sectionId?: string;
  theme: string;
  sectionPadding: string[];
  cards: {
    cardTitle: string;
    fieldGroupName: string;
    subtitle: string;
    cta: {
      fieldGroupName: string;
      linkPath: string;
      linkText: string;
    }
    cardImage: {
      node: {
        altText: string;
        sourceUrl: string;
      }
    }
  }[];
  link: {
    classname: string;
    fieldGroupName: string;
    linkText: string;
    linkUrl: string;
    target: string;
  }
}



export interface ContactSectionBlade {
  fieldGroupName: 'PagebuilderSectionsContentWithFormOrCalanderLayout';
  sectionId?: string;
  theme?: "light" | "dark";
  contactTitle: string;
  subtitle: string;
  formcalender?: string;
  isIconCards?: boolean;
  iconWithTextCards?: {
    card: {
      icon: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      title: string;
      subtitle: string;
    };
  }[];
  link?: {
    classname: string;
    linkText: string;
    linkUrl: string;
    target: boolean;
  };
  sectionPadding?: string[];
}

export interface FooterCtaBlade {
  fieldGroupName: "PagebuilderSectionsFooterCtaLayout";
  sectionId?: string;
  subtitle: string;
  sectionPadding: string[];
  theme: string;
  footerCtaTitle: string;
  link: {
    target: string;
    linkUrl: string;
    linkText: string;
    fieldGroupName: string;
    classname: string;
  }
}

export interface IconWithTextCardBlade {
  fieldGroupName: 'PagebuilderSectionsIconWithTextCardLayout';
  sectionId?: string;
  theme?: "light" | "dark";
  sectionPadding?: string[];
  topDivider?: boolean;
  cards?: {
    cardTitle?: string;
    subtitle?: string;
    cardImage?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
      };
    };
  }[];
}

export interface FeatureHighlightsBlade {
  fieldGroupName: 'PagebuilderSectionsFeaturedHighlightsLayout';
  sectionId?: string;
  theme?: 'light' | 'dark';
  sectionPadding?: string[];
  items?: {
    title: string;
    description: string;
    bulletColor?: 'blue' | 'white';
  }[];
  link?: {
    linkText: string;
    linkUrl: string;
    target?: boolean;
    classname?: string;
  };
}

export interface GridLayoutBlade {
  fieldGroupName: 'PagebuilderSectionsGridLayoutSectionLayout';
  sectionId?: string;
  theme: string;
  rows?: {
    columnLayout: "equal" | "leftLarge" | "rightLarge" | null;
    cards?: {
      cardTitle: string;
      cardDescription: string;
      cardImage: {
        node: {
          altText: string;
          sourceUrl: string;
        }
      }
      cta: {
        ctaLabel: string;
        ctaUrl: string;
        openInNewTab: boolean;
      }
    }[];
  }[];
  sectionPadding: string[];
  link?: {
    target: string;
    linkUrl: string;
    linkText: string;
    classname: string[];
  }
}

export interface ComparisonRowGridBlade {
  fieldGroupName: 'PagebuilderSectionsComparisonRowGridLayout';
  sectionId?: string;
  sectionPadding?: string[];
  leftColumnLabel?: string;
  rightColumnLabel?: string;
  comparisonRows?: {
    leftText: string;
    rightText: string;
  }[];
  footerText?: string;
  link?: {
    linkText: string;
    linkUrl: string;
    target?: string;
    classname?: string;
  };
}

export interface ProcessTimelineBlade {
  fieldGroupName: 'PagebuilderSectionsProcessTimelineLayout';
  sectionId?: string;
  sectionPadding?: string[];
  steps?: {
    title: string;
    description: string;
  }[];
}

export type Blade =
  | HeroBannerBlade
  | IntroductionBlade
  | TimelineViewBlade
  | ImageWithContentBlade
  | ColThreeCardsBlade
  | ContactSectionBlade
  | FooterCtaBlade
  | IconWithTextCardBlade
  | FeatureHighlightsBlade
  | GridLayoutBlade
  | ComparisonRowGridBlade
  | ProcessTimelineBlade;
