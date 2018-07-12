import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import CollectionsWithOverlay from '../components/collections/with-overlay'
import style from './index.module.css'
import MarcoLogo from '../components/marco-logo';
import Exhibition from '../components/exhibition'

const IndexPage = ({ data }) =>
  <div>
    <div className={style.imageContainer}>
      <div className={style.introContainer}>
        <MarcoLogo image={data.marcoLogo.edges[0].node} />
        <p className={style.introText}>from nowhere with love</p>
      </div>
      <div className={style.frontContainer}>
        <div className={style.frontInnerContainer}>
          <ScrollableAnchor id="collections">
            <div>
              <CollectionsWithOverlay
                triangleNodes={data.triangles.edges}
                dreamNodes={data.dreamWithinADream.edges}
                bitsNodes={data.bitsAndPieces.edges}
              />
            </div>
          </ScrollableAnchor>
        </div>
      </div>
    </div>
    <div className={style.textContainer}>
      <div className={style.textInnerContainer}>
        <ScrollableAnchor id="history">
          <div className={style.contentGroup}>
            <h3>history</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="exhibition">
          <div className={style.contentGroup}>
            <h3>exhibition</h3>
            <Exhibition />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <div className={style.contentGroup}>
            <h3>contact</h3>
            <p>
              <a href="tel:+375291234567" rel="nofollow">375-29-123-4567</a>
            </p>
          </div>
        </ScrollableAnchor>
      </div>
    </div>
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
        regex: "/collections\/bits-n-pieces/"
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

export default IndexPage
