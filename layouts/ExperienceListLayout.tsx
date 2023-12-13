'use client';

import Card from '@/components/Card';
import Link from 'next/link';
import companyData from 'app/company-data.json';
import { slug } from 'github-slugger';
import { CoreContent } from 'pliny/utils/contentlayer';
import { Experience } from 'contentlayer/generated';

interface ExperienceListLayoutProps {
  company?: string;
  posts: CoreContent<Experience>[];
}

export default function ExperienceListLayout({ company, posts }: ExperienceListLayoutProps) {
  const companyRecords = companyData as Record<string, number>;
  const companyKeys = Object.keys(companyRecords);

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-6 md:space-y-12">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="uppercase text-primary-500">{company?.toUpperCase()} </span>
            Work Experience
          </h1>
          <div className="text-lg leading-5 text-gray-500 dark:text-gray-400">
            <p>{company?.toUpperCase()} 에서 재직중 참여한 업무 경험 리스트</p>
            <div className="mt-10 flex max-w-lg flex-wrap">
              <div className=" mb-2 mr-5">
                <Link
                  href={`/experience`}
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  All
                </Link>
              </div>

              {companyKeys.map((_company) => {
                return (
                  <div key={_company} className="mb-2 mr-5">
                    <Link
                      href={`/experience/${slug(_company.toLowerCase())}`}
                      className={
                        company !== _company
                          ? 'mr-3 text-sm font-medium uppercase text-gray-500 hover:text-primary-600  dark:text-gray-400'
                          : 'mr-3 text-sm font-bold uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      }
                    >
                      {_company}
                    </Link>

                    <Link
                      href={`/experience/${slug(_company.toLowerCase())}`}
                      className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                      aria-label={`View experince tagged ${_company}`}
                    >
                      {` (${companyRecords[_company]})`}
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Showcase your projects with a hero image (16 x 9) */}
          </div>
        </div>
        <div className="container py-12 pt-8">
          <div className="-m-4 flex flex-wrap">
            {posts.map((d) => (
              <Card
                key={d.title}
                company={d.company}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
