import { gql } from "graphql-request"

export const FooterCta_Fragment = gql`
fragment FooterCtaLayout on PagebuilderSectionsFooterCtaLayout {
          fieldGroupName
          subtitle
          sectionPadding
          theme
          footerCtaTitle:title
          link {
            target
            linkUrl
            linkText
            fieldGroupName
            classname
          }
        }
`