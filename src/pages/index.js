import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { translate } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import Image from 'gatsby-image'

import CollectionsWithOverlay from '../components/collections/with-overlay'
import style from './index.module.css'
import MarcoLogo from '../components/marco-logo';
import Exhibition from '../components/exhibition'
import { contentBreakdown, marginBreakdown } from '../utils/layout'

const IndexPage = ({ data, t }) =>
  <div>
    <div className={style.imageContainer}>
      <div className={style.introContainer}>
        <MarcoLogo image={data.marcoLogo.edges[0].node} />
        <Box mt={[0, null, '2rem']} mb={[0, null, '6rem']}>
          <p>from nowhere with love</p>
        </Box>
      </div>
      <Flex className={style.frontContainer}>
        <Box w={marginBreakdown} />
        <Box
          flex column justify='center'
          w={contentBreakdown}
          p={['1rem', null, '2rem']}
          className={style.frontInnerContainer}
        >
          <ScrollableAnchor id="collections">
            <CollectionsWithOverlay data={data.collections.edges} />
          </ScrollableAnchor>
        </Box>
        <Box w={marginBreakdown} />
      </Flex>
    </div>
    <Flex className={style.textContainer}>
      <Box w={marginBreakdown} />
      <Box flex column justify='center' w={contentBreakdown} className={style.textInnerContainer}>
        <ScrollableAnchor id="history">
          <div className={style.contentGroup}>
            <h3>{t('historyTitle')}</h3>
            <Box w={['100%', '40%', '25%']} className={style.marcoPic}>
              <Image sizes={data.marcoPic.edges[0].node.sizes} />
            </Box>
            <span dangerouslySetInnerHTML={{ __html: t('historyText') }} />
            <br/>
            <br/>
            <h3>{t('biographyTitle')}</h3>
            <span dangerouslySetInnerHTML={{ __html: t('biographyText') }} />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="exhibition">
          <div className={style.contentGroup}>
            <h3>{t('exhibitionTitle')}</h3>
            <Exhibition />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <div className={style.contentGroup}>
            <h3>{t('contactTitle')}</h3>
            <p>
              <a className={style.phoneNumber} href="tel:+375299439932" rel="nofollow">+375 (29) 943-99-32‬</a>
            </p>
          </div>
        </ScrollableAnchor>
      </Box>
      <Box w={marginBreakdown} />
    </Flex>
  </div>

export const query = graphql`
query TrianglesCollectionImages {
  marcoPic: allImageSharp(
    filter: {
      id: {
        eq: "src/static/marco.jpg absPath of file >> ImageSharp"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
        original {
          src
        }
      }
    }
  }

  marcoLogo: allImageSharp(
    filter: {
      id: {
        eq: "src/static/marco-logo.png absPath of file >> ImageSharp"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
        original {
          src
        }
      }
    }
  }

  collections: allContentfulCollection {
    edges {
      node {
        name
        images {
          sizes(maxWidth: 800) {
            ...GatsbyContentfulSizes
          }
        }
        node_locale
      }
    }
  }
}
`

export default translate('main')(IndexPage)