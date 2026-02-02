import React, { ReactElement, ReactNode } from 'react';
import BannerThird from '../BannerThird';
import IntroSection from '../Intro';
import Timeline from '../Timeline';

interface ThemeImage {
  light: string;
  dark: string;
}

interface HeroBannerBlade {
  fieldGroupName: 'PagebuilderSectionsHeroBannerLayout';
  theme?: "light" | "dark";
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
  theme?: "light" | "dark";
  sectionPadding: string[];
}

interface TimelineViewBlade {
  fieldGroupName: 'PagebuilderSectionsTimelineViewLayout';
  theme?: "light" | "dark";
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

export type Blade = HeroBannerBlade | IntroductionBlade | TimelineViewBlade;

interface IndexProps {
  blades: Blade[];
}

const Index: React.FC<IndexProps> = ({ blades }) => {
  const bladeList = pageBuilder(blades);

  return (
    <>
      {bladeList.length && bladeList?.map((blade, index) => (
        <React.Fragment key={index}>{blade}</React.Fragment>
      ))}
    </>
  );
};

export default Index;

function pageBuilder(
  data?: Blade[]
): ReactNode[] {
  const blades: ReactNode[] = [];
  
  data?.forEach((blade, index) => {
    const layout = blade?.fieldGroupName?.replace(
      'PagebuilderSections',
      ''
    );

    switch (layout) {
      case 'HeroBannerLayout':
        if (blade.fieldGroupName === 'PagebuilderSectionsHeroBannerLayout') {
          blades.push(<BannerThird data={blade} />);
        }
        break;
      case 'IntroductionLayout':
        if (blade.fieldGroupName === 'PagebuilderSectionsIntroductionLayout') {
          blades.push(<IntroSection data={blade} />);
        }
        break;
      case 'TimelineViewLayout':
        if (blade.fieldGroupName === 'PagebuilderSectionsTimelineViewLayout') {
          blades.push(<Timeline data={blade} />);
        }
        break;

      default:
        break;
    }
  });

  return blades;
}
