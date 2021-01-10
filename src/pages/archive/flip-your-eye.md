---
title: 'Flip Your Eye'
date: 2019-11-16
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query flip { images: allFile( filter: { relativeDirectory: { eq: "flip-your-eye" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 270, maxHeight: 270) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />
