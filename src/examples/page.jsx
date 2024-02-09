import React from 'react';
import PageHero from '../components/PageHero';
import Solution from '../components/Solution';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Examples() {
  return (
    <>
      <PageHero
        title="Noteworthy"
        subtitle="Examples"
        content="Enhance your team's efficiency with a swift AI assistant creation
              process. In mere minutes, craft an AI companion seamlessly
              collaborating with your entire team."
      />
      <Solution />
      <Brand />
      <div className="mt-192">
        <Newsletter />
      </div>
    </>
  );
}
