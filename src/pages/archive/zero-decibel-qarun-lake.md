---
title: 'Zero Decibel Qarun Lake, Egypt'
date: 2020-04-26
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query zeroDecibel { images: allFile( filter: { relativeDirectory: { eq: "zero-decibel-qarun-lake" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 270, maxHeight: 270) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

Qarun lake photoset, a zero decibel place in Egypt.
