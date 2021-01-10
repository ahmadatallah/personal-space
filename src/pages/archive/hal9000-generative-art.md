---
title: 'Hal9000 Generative Art'
date: 2020-09-24
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query hal9000 { images: allFile( filter: { relativeDirectory: { eq: "hal9000-gen-art" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 450, maxHeight: 300) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid }, }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

Generative art of HAL 9000 from 2001: A Space Odyssey by overlaying three radial gradients generated and saved from
[@components_ai](https://components.ai/)
