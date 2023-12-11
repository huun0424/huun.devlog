import { Resume, allResumes } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import ResumeLayout from '@/layouts/ResumeLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  const author = allResumes.find((p) => p.slug === 'default') as Resume;
  const mainContent = coreContent(author);

  return (
    <>
      <ResumeLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </ResumeLayout>
    </>
  );
}
