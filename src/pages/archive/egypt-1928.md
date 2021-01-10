---
title: 'Egypt 1928'
date: 2021-01-05
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query egypt1928 { images: allFile( filter: { relativeDirectory: { eq: "egypt-1928" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 270, maxHeight: 270) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

Photoset of Egypt 2021 in one of Giza's villages.