import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, { translate } from '@docusaurus/Translate';
import { Button, OutlinedButton } from '@site/src/components/button';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Home page',
      })}
      description="Blog website for sharing about technologies like Web/App, Embedded, IOT,...">
      <main className="min-h-[80vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-300 to-gray-50 dark:from-primary-800 dark:to-gray-800">
        <div className="container mx-auto py-10 md:py-20">
          <h1 className="text-3xl md:text-4xl text-secondary-700 dark:text-secondary-400 text-center">
            <Translate>Welcome to noibinhyen</Translate>
          </h1>

          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-base md:text-lg text-primary-900 dark:text-primary-50 text-center max-w-lg">
                <Translate>
                  Blog website for sharing about technologies, Web/App, Embedded, IOT and more...
                </Translate>
              </h2>

              <h3 className="mt-8 text-4xl md:text-6xl tracking-widest text-primary-500 dark:text-primary-500 text-center max-w-2xl">
                <Translate>{"Let's discover more about us"}</Translate>
              </h3>

              <div className="flex flex-row items-center justify-center mt-8 space-x-5">
                <Link to="/blogs">
                  <Button size="xl">
                    <Translate>Blog</Translate>
                  </Button>
                </Link>
                <Link to="/series">
                  <OutlinedButton size="xl">
                    <Translate>Series</Translate>
                  </OutlinedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
