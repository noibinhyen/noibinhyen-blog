import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, { translate } from '@docusaurus/Translate';
import { Button, OutlinedButton } from '@site/src/components/button';

const socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/buiducnhat47',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/facebook-new.png',
  },
  {
    name: 'github',
    url: 'https://github.com/buiducnhat',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/github.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nhat-bui-a97373158/',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/linkedin.png',
  },
  {
    name: 'email',
    url: 'mailto:nhaths4701@gmail.com',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/email.png',
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Home page',
      })}
      description="Blog website for sharing about technologies like Web/App, Embedded, IOT,...">
      <main className="min-h-[70vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-300 to-gray-50 dark:from-primary-800 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-primary-900 dark:text-primary-50 text-center">Hello</h1>
        </div>
      </main>
    </Layout>
  );
}
