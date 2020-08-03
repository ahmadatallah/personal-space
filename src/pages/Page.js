import React from 'react';
import Helmet from 'react-helmet';
import avatar from '../assets/images/avatar.jpg';

function Page({
  title,
  path,
  preview = `https://syncatallah.cc/static/media/avatar.72902b0b.jpg`,
  children,
  ...props
}) {
  return (
    <>
      <Helmet
        titleTemplate="Atallahsan - %s"
        defaultTitle={title}
        defer={false}
      >
        {/* multiple meta elements */}
        <meta charset="utf-8" />
        <meta property="og:image" content={preview} />
        <meta property="og:url" content={`https://syncatallah.cc/${path}`} />

        {/* html attributes */}
        <html lang="en" amp />

        {/* body attributes */}
        <body className="root" />

        {/* title attributes and value */}
        <title itemProp="name" lang="en">
          {title}
        </title>
      </Helmet>
      {children}
    </>
  );
}

export default Page;
