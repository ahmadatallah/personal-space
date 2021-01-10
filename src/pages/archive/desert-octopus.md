---
title: 'Desert Octopus, Egypt'
date: 2020-04-01
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query desertOctopus { images: allFile( filter: { relativeDirectory: { eq: "desert-octopus" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 270, maxHeight: 270) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

Two photos of Pyramid of Amenemhat III A.K.A The Black Pyramid [wiki](<https://en.wikipedia.org/wiki/Pyramid_of_Amenemhat_III_(Dahshur)>).
