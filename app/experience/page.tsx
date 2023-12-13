import { genPageMetadata } from 'app/seo';
import { Metadata } from 'next';
import ExperienceLayout from '@/layouts/ExperienceLayout';
import { allExperiences } from 'contentlayer/generated';

export async function generateMetadata(): Promise<Metadata> {
  return genPageMetadata({
    title: 'Experience',
    description: `All Work Experience`,
  });
}

export default function Experience() {
  return <ExperienceLayout posts={allExperiences.sort((postA, postB) => postB.seq - postA.seq)} />;
}
