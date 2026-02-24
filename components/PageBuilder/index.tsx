import React, { ReactNode } from 'react';
import BannerThird from '../BannerThird';
import IntroSection from '../Intro';
import Timeline from '../Timeline';
import ColTwoCard from '../ColTwoCard';
import ThreeColumns from '../ThreeColumns';
import GridCards from '../GridCards';
import ContactSection from '../ContactSection';
import Cta from '../Cta';
import IconWithTextCard from '../IconWithTextCard';
import {
  Blade, HeroBannerBlade,
  IntroductionBlade,
  TimelineViewBlade,
  ImageWithContentBlade,
  ColThreeCardsBlade,
  GridCardsBlade,
  ContactSectionBlade,
  FooterCtaBlade,
  IconWithTextCardBlade
} from './section.types';



interface IndexProps {
  blades: Blade[];
  data?: any;
}

const Index: React.FC<IndexProps> = ({ blades, data }) => {
  return <>{pageBuilder(blades)}</>;
};

export default Index;


type BladeComponentMap = {
  PagebuilderSectionsHeroBannerLayout: React.FC<{ data: HeroBannerBlade }>;
  PagebuilderSectionsIntroductionLayout: React.FC<{ data: IntroductionBlade }>;
  PagebuilderSectionsTimelineViewLayout: React.FC<{ data: TimelineViewBlade }>;
  PagebuilderSectionsImageWithContentLayout: React.FC<{ data: ImageWithContentBlade }>;
  PagebuilderSectionsColThreeCardsLayout: React.FC<{ data: ColThreeCardsBlade }>;
  PagebuilderSectionsGridCardsSectionLayout: React.FC<{ data: GridCardsBlade }>;
  PagebuilderSectionsContentWithFormOrCalanderLayout: React.FC<{ data: ContactSectionBlade }>;
  PagebuilderSectionsFooterCtaLayout: React.FC<{ data: FooterCtaBlade }>;
  PagebuilderSectionsIconWithTextCardLayout: React.FC<{ data: IconWithTextCardBlade }>;
};

const layoutMap: BladeComponentMap = {
  PagebuilderSectionsHeroBannerLayout: BannerThird,
  PagebuilderSectionsIntroductionLayout: IntroSection,
  PagebuilderSectionsTimelineViewLayout: Timeline,
  PagebuilderSectionsImageWithContentLayout: ColTwoCard,
  PagebuilderSectionsColThreeCardsLayout: ThreeColumns,
  PagebuilderSectionsGridCardsSectionLayout: GridCards,
  PagebuilderSectionsContentWithFormOrCalanderLayout: ContactSection,
  PagebuilderSectionsFooterCtaLayout: Cta,
  PagebuilderSectionsIconWithTextCardLayout: IconWithTextCard as any,
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
