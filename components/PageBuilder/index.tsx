import React, { ReactNode } from 'react';
import BannerThird from '../BannerThird';
import IntroSection from '../Intro';
import Timeline from '../Timeline';
import ColTwoCard from '../ColTwoCard';

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

interface ThemeImage {
  light: string;
  dark: string;
}

interface HeroBannerBlade {
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

interface IntroductionBlade {
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

interface TimelineViewBlade {
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

interface ImageWithContentBlade {
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

interface IndexProps {
  blades: Blade[];
}

/* ------------------------------------------------------------------ */
/* Page */
/* ------------------------------------------------------------------ */

const Index: React.FC<IndexProps> = ({ blades }) => {
  return <>{pageBuilder(blades)}</>;
};

export default Index;

/* ------------------------------------------------------------------ */
/* Page Builder */
/* ------------------------------------------------------------------ */

type BladeComponentMap = {
  PagebuilderSectionsHeroBannerLayout: React.FC<{ data: HeroBannerBlade }>;
  PagebuilderSectionsIntroductionLayout: React.FC<{ data: IntroductionBlade }>;
  PagebuilderSectionsTimelineViewLayout: React.FC<{ data: TimelineViewBlade }>;
  PagebuilderSectionsImageWithContentLayout: React.FC<{ data: ImageWithContentBlade }>;
};

const layoutMap: BladeComponentMap = {
  PagebuilderSectionsHeroBannerLayout: BannerThird,
  PagebuilderSectionsIntroductionLayout: IntroSection,
  PagebuilderSectionsTimelineViewLayout: Timeline,
  PagebuilderSectionsImageWithContentLayout: ColTwoCard,
};

function pageBuilder(data: Blade[]): ReactNode[] {
  return data.map((blade, index) => {
    const Component = layoutMap[blade.fieldGroupName];

    if (!Component) return null;

    return (
      <Component
        key={index}
        data={blade as never}
      />
    );
  }).filter(Boolean);
}
