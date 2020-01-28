/** @jsx jsx */
import jsx from '../jsx';
import React, { lazy, Suspense } from 'react';
import BlockLinkGrow from './BlockLinkGrow';
import { H2 } from '../elements';
import Flex from './Flex';
import Loading from './Loading';

const Img = lazy(() => import('../elements/Img'));

const Card = ({
  href,
  image,
  title,
  subtitle,
  text,
  tag,
  link,
  subLink,
  ...props
}) => {
  return (
    <article {...props}>
      <div position="relative">
        {tag && (
          <div
            position="absolute"
            top={16}
            right={16}
            width="auto"
            px={2}
            py={1}
            borderRadius={1}
            bg="gray"
            color="currentcolor"
            fontSize={0}
          >
            {tag}{' '}
          </div>
        )}
        {props.children ? (
          props.children
        ) : (
          <BlockLinkGrow>
            <Suspense
              fallback={
                <Flex flexDirection="row" justifyContent="center">
                  <H2 fontWeight={300} mr={2}>
                    {' '}
                    Loading{' '}
                  </H2>
                  <Loading type="spokes" color="currentcolor" />
                </Flex>
              }
            >
              <Img
                src={image}
                alt={link.text}
                onClick={() => (window.location.href = href)}
              />
            </Suspense>
          </BlockLinkGrow>
        )}
      </div>
      <div px={[3, 4]} py={[3, 4]}>
        {title && (
          <h3 fontSize={2} mt={0} mb={1}>
            {title}
          </h3>
        )}
        {subtitle && (
          <h3 fontSize={1} mt={0} mb={2} lineHeight={1.25}>
            {subtitle}
          </h3>
        )}
        {subLink && (
          <>
            <a
              href={subLink}
              fontWeight={500}
              fontSize={1}
              borderRadius={3}
              px={0}
              py={2}
              mr={2}
            >
              Read or
            </a>
          </>
        )}
        {text && (
          <p fontSize={1} my={0}>
            {text}
          </p>
        )}
        {link && (
          <BlockLinkGrow
            href={link.href}
            fontWeight={700}
            textStyle="none"
            fontSize={1}
            borderRadius={3}
            px={0}
            py={2}
          >
            {link.text}
          </BlockLinkGrow>
        )}
      </div>
    </article>
  );
};

Card.defaultProps = {
  border: '1px solid',
  borderColor: 'black-10',
  borderRadius: 2,
  style: { overflow: 'hidden' },
};

export default Card;
