/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import { Link } from 'gatsby';

const Intro = () => {
  return (
    <section
      aria-labelledby="intro-section"
      sx={{
        pb: 5,
      }}
    >
      <h1
        id="main-heading"
        sx={{
          fontSize: [4, 5],
          fontWeight: 900,
          lineHeight: 'heading',
          mb: 3,
        }}
      >
        I'm Ahmad, a programmer and an artist.
      </h1>
      <p
        sx={{
          fontSize: 2,
          lineHeight: 1.6,
          color: 'text',
          maxWidth: '100%',
        }}
      >
        I use this space to share highlights from daily random stuff I do, which
        you can find in the{' '}
        <NavLink
          as={Link}
          to="/archive"
          sx={{ variant: 'styles.navlink', textDecoration: 'underline' }}
        >
          archive
        </NavLink>{' '}
        and sometimes drafts in{' '}
        <NavLink
          as={Link}
          to="/notes"
          sx={{ variant: 'styles.navlink', textDecoration: 'underline' }}
        >
          notes
        </NavLink>
        . I'm privately active on{' '}
        <a
          href="https://www.instagram.com/ahmad.atallah/"
          sx={{ variant: 'styles.navlink', textDecoration: 'underline' }}
        >
          instagram
        </a>
        . Feel free to contact me at{' '}
        <a
          href="mailto:hi@atallahsan.cc"
          sx={{ variant: 'styles.navlink', textDecoration: 'underline' }}
        >
          hi@atallahsan.cc
        </a>
        . The least important thing here is checking my{' '}
        <a
          href="/resumelatest.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ variant: 'styles.navlink', textDecoration: 'underline' }}
        >
          resume (pdf)
        </a>
        .
      </p>
    </section>
  );
};

export default Intro;
