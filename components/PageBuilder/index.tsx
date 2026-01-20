import React, { ReactElement, ReactNode } from 'react';
import HeroBanner from '../Banner';


/**
 * Generic blade type.
 * You can replace `any` with a real schema later if needed.
 */
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
//   const bladeList = pageBuilder(blades.pageBuilderSections?.sections);

  return (
    <>
    page builder
      {/* {bladeList.map((blade, index) => (
        <React.Fragment key={index}>{blade}</React.Fragment>
      ))} */}
    </>
  );
};

export default Index;

// function pageBuilder(
//   data?: Blade[]
// ): ReactNode[] {
//   const blades: ReactNode[] = [];

//   data?.forEach((blade, index) => {
//     const layout = blade?.fieldGroupName?.replace(
//       'PageBuilderSectionsSections',
//       ''
//     );

//     switch (layout) {
//       case 'HeroBannerLayout':
//         blades.push(<HeroBanner banner={blade} />);
//         break;


//       default:
//         break;
//     }
//   });

//   return blades;
// }
