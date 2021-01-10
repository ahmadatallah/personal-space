---
title: 'Kids Stories'
date: 2020-12-09
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query kidsStories { images: allFile( filter: { relativeDirectory: { eq: "kids-stories" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 400, maxHeight: 400) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
})).slice(0, 4)} />

Story 1

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name
})).slice(4, 8)} />

Story 2
