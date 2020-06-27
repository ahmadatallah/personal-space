/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Collage from '../components/Collage';
import { photos } from '../utils/constants';

export function Frames({ ...props }) {
  return (
    <>
      <Collage
        title="Frames"
        totalPages={2}
        initialLength={45}
        photos={photos}
      />
    </>
  );
}
