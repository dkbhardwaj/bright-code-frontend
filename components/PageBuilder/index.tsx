import React, { ReactNode } from 'react';
import BannerThird from '../BannerThird';
import IntroSection from '../Intro';
import Timeline from '../Timeline';
import ColTwoCard from '../ColTwoCard';
import ThreeColumns from '../ThreeColumns';
import GridCards from '../GridCards';
import ContactSection from '../ContactSection';
import Cta from '../Cta';
import {
  Blade, HeroBannerBlade,
  IntroductionBlade,
  TimelineViewBlade,
  ImageWithContentBlade,
  ColThreeCardsBlade,
  GridCardsBlade,
  ContactSectionBlade,
  FooterCtaBlade,
} from './section.types';



interface IndexProps {
  blades: Blade[];
}

const Index: React.FC<IndexProps> = ({ blades }) => {
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
  PagebuilderSectionsFooterCtaLayout: React.FC<{ data: FooterCtaBlade }>
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
