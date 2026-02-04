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
  link: {
            classname:string;
            fieldGroupName:string;
            linkText:string;
            linkUrl:string;
            target:string;
          }
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

export interface ColThreeCardsBlade {
   fieldGroupName : 'PagebuilderSectionsColThreeCardsLayout';
   theme : string;
   sectionPadding : string[];
   cards : {
     cardTitle : string;
     fieldGroupName :string ; 
     subtitle : string;
     cta: {
       fieldGroupName : string;
       linkPath: string;
       linkText: string;
     }
     cardImage: {
       node: {
         altText: string;
         sourceUrl:string;
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

export interface GridCardsBlade {
   fieldGroupName : 'PagebuilderSectionsGridCardsSectionLayout';
          theme:string;
          gridCards: {
            cardTitle:string;
            cardDescription:string;
            cardImage: {
              node: {
                altText:string;
                sourceUrl:string;
              }
            }
            cta: {
              ctaLabel:string;
              ctaUrl:string;
              openInNewTab:boolean;
            }
          }[];
          sectionPadding:string[];
          link: {
            target:string;
            linkUrl:string;
            linkText:string;
            classname:string[];
          }
}


export interface ContactSectionBlade {
  fieldGroupName: 'PagebuilderSectionsContentWithFormOrCalanderLayout';
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
  fieldGroupName:"PagebuilderSectionsFooterCtaLayout";
  subtitle:string;
  sectionPadding:string[];
  theme:string;
  footerCtaTitle:string;
  link: {
    target:string;
    linkUrl:string;
    linkText:string;
    fieldGroupName:string;
    classname:string;
  }
}

export type Blade =
  | HeroBannerBlade
  | IntroductionBlade
  | TimelineViewBlade
  | ImageWithContentBlade
  | ColThreeCardsBlade
  | GridCardsBlade
  | ContactSectionBlade
  | FooterCtaBlade;
