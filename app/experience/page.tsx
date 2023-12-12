import { genPageMetadata } from 'app/seo';
import { Metadata } from 'next';
import ExperienceLayout from '@/layouts/ExperienceLayout';

export async function generateMetadata(): Promise<Metadata> {
  return genPageMetadata({
    title: 'Experience',
  });
}

export default function Experience() {
  return <ExperienceLayout />;
}
