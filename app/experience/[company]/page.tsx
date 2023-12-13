import { allCoreContent } from 'pliny/utils/contentlayer';
import siteMetadata from '@/data/siteMetadata';
import companyData from 'app/company-data.json';
import { genPageMetadata } from 'app/seo';
import { Metadata } from 'next';
import { allExperiences } from 'contentlayer/generated';
import ExperienceListLayout from '@/layouts/ExperienceListLayout';

export async function generateMetadata({
  params,
}: {
  params: { company: string };
}): Promise<Metadata> {
  const company = decodeURI(params.company);
  return genPageMetadata({
    title: `Experience ${company.toUpperCase()}`,
    description: `${siteMetadata.title} ${company} experience`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/experience/${company}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  const companyCounts = companyData as Record<string, number>;
  const companyKeys = Object.keys(companyCounts);
  const paths = companyKeys.map((company) => ({
    company: encodeURI(company),
  }));
  return paths;
};

export default function ExperienListPage({ params }: { params: { company: string } }) {
  const company = decodeURI(params.company);

  const filteredPosts = allCoreContent(allExperiences.filter((post) => post.company === company));

  return (
    <ExperienceListLayout
      company={company}
      posts={filteredPosts.sort((postA, postB) => postB.seq - postA.seq)}
    />
  );
}
