/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SEO from '../components/seo';

const iframeBase = {
  borderRadius: '8px',
  flex: '1 1 45%',
  minWidth: '280px',
};

const albums = [
  {
    src: 'https://open.spotify.com/embed/album/0B6r6jnemhqzvxLfml2deh?utm_source=generator&theme=0',
    title: 'Spotify album',
  },
  {
    src: 'https://open.spotify.com/embed/album/47BHME7jRdQbcpt7QcTKRy?utm_source=generator',
    title: 'Spotify album',
  },
  {
    src: 'https://open.spotify.com/embed/album/2VSREVWXk7rj9lbuzcmLlT?utm_source=generator',
    title: 'Spotify album',
  },
  {
    src: 'https://open.spotify.com/embed/album/0QayLUl2Egbp5wBqUbDrXQ?utm_source=generator',
    title: 'Spotify album',
  },
];

const bandcamp = [
  {
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1158321089/size=large/bgcol=333333/linkcol=ffffff/transparent=true/',
    title: "ALLELUJAH! DON'T BEND! ASCEND! by Godspeed You! Black Emperor",
  },
  {
    src: 'https://bandcamp.com/EmbeddedPlayer/album=3146681056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
    title: 'Crave by Léonie Pernet',
  },
];

const Music = () => (
  <>
    <SEO title="Music" />
    <h1 sx={{ fontSize: 5, fontWeight: 900, mb: 4 }}>Music</h1>
    <div
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      {albums.map((album) => (
        <iframe
          key={album.src}
          style={iframeBase}
          src={album.src}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={album.title}
        />
      ))}
      {bandcamp.map((album) => (
        <iframe
          key={album.src}
          style={{ ...iframeBase, border: 0 }}
          src={album.src}
          width="100%"
          height="352"
          seamless
          loading="lazy"
          title={album.title}
        />
      ))}
    </div>
  </>
);

export default Music;
