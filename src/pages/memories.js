import { translate } from 'react-i18next'
import React from 'react'
import { Flex, Box } from 'reflexbox'

import { contentBreakdown, marginBreakdown } from '../utils/layout'
import { edgesFilterLocale } from '../utils/i18n';

const MemoriesPage = ({ data, i18n }) =>
    <Flex py={4} px={3}>
        <Box w={marginBreakdown} />
        <Box w={contentBreakdown}>
            {
                data.memories.edges
                    .filter(edgesFilterLocale(i18n))
                    .map(({ node }) =>
                        <Box mb='10rem'>
                            <h1>{node.title}</h1>
                            <div dangerouslySetInnerHTML={{
                                __html: node.text.childMarkdownRemark.html
                            }} />
                        </Box>
                    )
            }
        </Box>
        <Box w={marginBreakdown} />
    </Flex>

export const query = graphql`
query Memories {
  memories: allContentfulMemory {
    edges {
      node {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        node_locale
      }
    }
  }
}
`

export default translate('memories')(MemoriesPage)