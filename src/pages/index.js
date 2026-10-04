import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const topics = [
  {
    icon: '🗾',
    title: '日本語 Japanese',
    desc: 'Grammar, vocabulary, and my study log.',
    link: '/japanese/intro',
  },
  {
    icon: '💻',
    title: 'Programming',
    desc: 'Things I built and learned.',
    link: '/programming/intro',
  },
  {
    icon: '📈',
    title: 'Marketing',
    desc: 'Notes, frameworks, and case studies.',
    link: '/marketing/intro',
  },
];

export default function Home() {
  return (
    <Layout
      title="Learning Journal"
      description="My notes on Japanese, programming, and marketing">
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            My Learning Journal
          </Heading>
          <p className={styles.heroSubtitle}>
            Everything I learn, written down. Pick a topic to start.
          </p>
        </div>
      </header>
      <main className="container margin-vert--xl">
        <div className="row">
          {topics.map((topic) => (
            <div className="col col--4 margin-bottom--lg" key={topic.title}>
              <Link className={styles.card} to={topic.link}>
                <div className={styles.cardIcon}>{topic.icon}</div>
                <Heading as="h2">{topic.title}</Heading>
                <p>{topic.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
