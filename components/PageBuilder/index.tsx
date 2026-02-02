import React, { ReactElement, ReactNode } from 'react';
import BannerThird from '../BannerThird';
import IntroSection from '../Intro';

interface Blade {
  fieldGroupName?: string;
  [key: string]: unknown;
}

interface PageBuilderSections {
  sections?: Blade[];
}

interface IndexProps {
  blades: {
    pageBuilderSections?: PageBuilderSections;
    [key: string]: unknown;
  };
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
        blades.push(<BannerThird data={blade} />);
        break;
      case 'IntroductionLayout':
        blades.push(<IntroSection data={blade} />);
        break;

      default:
        break;
    }
  });

  return blades;
}
