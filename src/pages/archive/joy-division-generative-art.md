---
title: 'Joy Division, Unknown Pleasure Generative Art'
date: 2021-01-09
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query jd { images: allFile( filter: { relativeDirectory: { eq: "joy-division-gen-art" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 360, maxHeight: 480) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid }, fixed(width: 400, height: 530) { ...GatsbyImageSharpFixed originalName } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

Generative art of Joy division's Unknown Pleasure album cover using [tinkersynth](https://tinkersynth.com/)
