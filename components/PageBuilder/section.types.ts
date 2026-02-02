interface ThemeImage {
  light: string;
  dark: string;
}

export interface HeroBannerBlade {
  fieldGroupName: 'PagebuilderSectionsHeroBannerLayout';
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
  eyebrowText?: string;
  introTitle: string;
  textAlighment: string;
  sub?: string;
  buttonText?: string;
  buttonLink?: string;
  theme?: 'light' | 'dark';
  sectionPadding: string[];
}

export interface TimelineViewBlade {
  fieldGroupName: 'PagebuilderSectionsTimelineViewLayout';
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
  timageOnLeft: boolean;

  image: {
    node: {
              altText:string;
              sourceUrl:string;
            }
  };
  eyebrowText: string;
  imageWithContentTitle: string;
  blurb: string;
  link:{
    target : boolean,
    linkUrl : string,
    linkText : string,
    classname: string,
  };
  buttonText: string;
  buttonLink: string;
  theme?: "light" | "dark";
  sectionPadding: string[];
}

export type Blade =
  | HeroBannerBlade
  | IntroductionBlade
  | TimelineViewBlade
  | ImageWithContentBlade;