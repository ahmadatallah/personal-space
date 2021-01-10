---
title: 'NGE and 2001: A Space Odyssey Parallels'
date: 2020-08-02
---

import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from "gatsby";

export const query = graphql`query nge { images: allFile( filter: { relativeDirectory: { eq: "nge-space-odyssey-parallels" } } sort: { fields: name } ) { edges { node { childImageSharp { thumb: fluid(maxWidth: 270, maxHeight: 270) { ...GatsbyImageSharpFluid originalName } full: fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid } }, name } } } }`

<Gallery images={props.data.images.edges.map(({ node }) => ({
...node.childImageSharp,
caption: node.name,
thumbAlt: node.name,
}))} />

• Neon Genesis Evangelion - Deactivation of Jet Alone.

• 2001: A Space Odyssey - Deactivation of Hal 9000.

A parallel depicts deactivation of two machines. The first from 1985's 'Neon Gensis Evangelion' anime series when Misato Katsuragi was trying to shutdown Jet Alone.
The Seconed was in in 1986's Stanley Kubrick movie '2001: A Space Odessy' when Dave trying to shutdown HAL 9000 machine.
