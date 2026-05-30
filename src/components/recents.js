/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toISOString().split('T')[0];
};

// Post slugs that differ from their image directory name
const slugToDirOverrides = {
  'window-xp-palette': 'windows-xp-palette',
  'hal9000-generative-art': 'hal9000-gen-art',
  'joy-division-generative-art': 'joy-division-gen-art',
  'red-room-generative-art': 'red-room-gen-art',
};

const SectionHeader = ({ title }) => (
  <h2
    sx={{
      fontSize: 3,
      fontWeight: 700,
      mt: 5,
      mb: 3,
      '&:first-of-type': { mt: 0 },
    }}
  >
    {title}
  </h2>
);

const PostRow = ({ to, title, date, images }) => (
  <li sx={{ py: '6px' }}>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 3,
      }}
    >
      <Link
        to={to}
        sx={{
          color: 'text',
          textDecoration: 'none',
          fontWeight: 400,
          fontSize: 2,
          ':hover': { textDecoration: 'underline' },
        }}
      >
        {title}
      </Link>
      <span
        sx={{
          fontSize: 1,
          color: 'gray',
          flexShrink: 0,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {formatDate(date)}
      </span>
    </div>
    {images && images.length > 0 && (
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '4px',
          mt: 2,
          mb: 1,
        }}
      >
        {images.map((img, i) => (
          <Link key={i} to={to} sx={{ display: 'block', lineHeight: 0 }}>
            <GatsbyImage
              image={img}
              alt=""
              sx={{ width: '100%', aspectRatio: '1', borderRadius: '2px' }}
              imgStyle={{ objectFit: 'cover' }}
            />
          </Link>
        ))}
      </div>
    )}
  </li>
);

export const Recents = () => {
  const data = useStaticQuery(graphql`
    {
      archive: allSitePage(
        sort: { fields: context___frontmatter___date, order: DESC }
        filter: {
          path: { glob: "/archive/*" }
          context: { frontmatter: { draft: { ne: true } } }
        }
        limit: 6
      ) {
        nodes {
          id
          path
          context {
            frontmatter {
              title
              date
            }
          }
        }
      }
      notes: allSitePage(
        sort: { fields: context___frontmatter___date, order: DESC }
        filter: {
          path: { glob: "/notes/*" }
          context: { frontmatter: { draft: { ne: true } } }
        }
        limit: 10
      ) {
        nodes {
          id
          path
          context {
            frontmatter {
              title
              date
            }
          }
        }
      }
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { in: ["jpg", "jpeg", "png", "webp"] }
        }
        sort: { fields: name }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 200
              height: 200
              quality: 80
              formats: [AUTO, WEBP]
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  `);

  // Group images by directory, max 4 per group
  const imagesByDir = {};
  data.images.nodes.forEach((node) => {
    const dir = node.relativeDirectory;
    if (!dir || !node.childImageSharp) return;
    if (!imagesByDir[dir]) imagesByDir[dir] = [];
    if (imagesByDir[dir].length < 4) {
      imagesByDir[dir].push(node.childImageSharp.gatsbyImageData);
    }
  });

  // Get images for a post by matching slug to image directory
  const getPostImages = (postPath) => {
    const slug = postPath.replace(/^\/archive\//, '').replace(/\/$/, '');
    const dir = slugToDirOverrides[slug] || slug;
    return imagesByDir[dir] || [];
  };

  const archive = data.archive.nodes;
  const notes = data.notes.nodes;

  return (
    <div>
      {notes.length > 0 && (
        <>
          <SectionHeader title="Notes" to="/notes" />
          <ul sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {notes.map((post) => (
              <PostRow
                key={post.id}
                to={post.path}
                title={post.context.frontmatter.title}
                date={post.context.frontmatter.date}
              />
            ))}
          </ul>
        </>
      )}

      {archive.length > 0 && (
        <>
          <SectionHeader title="Archive" to="/archive" />
          <ul sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {archive.map((post) => (
              <PostRow
                key={post.id}
                to={post.path}
                title={post.context.frontmatter.title}
                date={post.context.frontmatter.date}
                images={getPostImages(post.path)}
              />
            ))}
          </ul>
        </>
      )}

      <SectionHeader title="Music" />
      <div
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <iframe
          style={{ borderRadius: '8px', flex: '1 1 45%', minWidth: '280px' }}
          src="https://open.spotify.com/embed/album/0B6r6jnemhqzvxLfml2deh?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify album"
        />
        <iframe
          style={{ borderRadius: '8px', flex: '1 1 45%', minWidth: '280px' }}
          src="https://open.spotify.com/embed/album/47BHME7jRdQbcpt7QcTKRy?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify album"
        />
        <iframe
          style={{ borderRadius: '8px', flex: '1 1 45%', minWidth: '280px' }}
          src="https://open.spotify.com/embed/album/2VSREVWXk7rj9lbuzcmLlT?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify album"
        />
        <iframe
          style={{
            border: 0,
            borderRadius: '8px',
            flex: '1 1 45%',
            minWidth: '280px',
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1158321089/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
          width="100%"
          height="352"
          seamless
          loading="lazy"
          title="ALLELUJAH! DON'T BEND! ASCEND! by Godspeed You! Black Emperor"
        />
        <iframe
          style={{ borderRadius: '8px', flex: '1 1 45%', minWidth: '280px' }}
          src="https://open.spotify.com/embed/album/0QayLUl2Egbp5wBqUbDrXQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify album"
        />
        <iframe
          style={{
            border: 0,
            borderRadius: '8px',
            flex: '1 1 45%',
            minWidth: '280px',
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3146681056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          width="100%"
          height="352"
          seamless
          loading="lazy"
          title="Crave by Léonie Pernet"
        />
      </div>
    </div>
  );
};
