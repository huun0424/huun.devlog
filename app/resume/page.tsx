import { Resume, allResumes } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import ResumeLayout from '@/layouts/ResumeLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';
import { components } from '@/components/MDXComponents';

export const metadata = genPageMetadata({ title: 'Resume' });

export default function Page() {
  const resume = allResumes.find((p) => p.slug === 'default') as Resume;
  const mainContent = coreContent(resume);
  return (
    <>
      <ResumeLayout content={mainContent}>
        <MDXLayoutRenderer code={resume.body.code} components={components} />
      </ResumeLayout>
    </>
  );
}
