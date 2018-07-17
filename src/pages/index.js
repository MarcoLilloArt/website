import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { translate } from 'react-i18next'
import { Flex, Box } from 'reflexbox'

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
            <div>
              <CollectionsWithOverlay
                triangleNodes={data.triangles.edges}
                dreamNodes={data.dreamWithinADream.edges}
                bitsNodes={data.bitsAndPieces.edges}
                otherNodes={data.other.edges}
                toolsNodes={data.tools.edges}
                turbulenceNodes={data.turbulence.edges}
                fromNowhereNodes={data.fromNowhereWithLove.edges}
              />
            </div>
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
            <div dangerouslySetInnerHTML={{ __html: t('historyText') }} />
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
              <a href="tel:+375291234567" rel="nofollow">375-29-123-4567</a>
            </p>
          </div>
        </ScrollableAnchor>
      </Box>
      <Box w={marginBreakdown} />
    </Flex>
  </div>

export const query = graphql`
query TrianglesCollectionImages {
  marcoLogo: allImageSharp(
    filter: {
      id: {
        eq: "src/static/marco.png absPath of file >> ImageSharp"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  triangles: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/triangles/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  dreamWithinADream: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/dream-within-a-dream/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  bitsAndPieces: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/bits-and-pieces/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  fromNowhereWithLove: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/from-nowhere-with-love/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  other: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/other/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  tools: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/tools/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  turbulence: allImageSharp(
    filter: {
      id: {
        regex: "/collections\/turbulence/"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
}
`

export default translate('main')(IndexPage)
