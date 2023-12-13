'use client';

// import Card from '@/components/Card';
import experienceData, { companyList } from '@/data/experienceData';
import Link from 'next/link';

import { slug } from 'github-slugger';
import Tag from '@/components/Tag';

export default function ExperienceLayout() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-6 md:space-y-12">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="uppercase text-primary-500">All </span>
            Work Experience
          </h1>
          <div className="text-lg leading-5 text-gray-500 dark:text-gray-400">
            <p>6년간 재직한 회사에서 참여한 업무 경험 리스트</p>
            <div className="mt-10 flex max-w-lg flex-wrap">
              <div className=" mb-2 mr-5">
                <Link
                  href={`/experience`}
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  All
                </Link>
              </div>

              {companyList.map(({ name, count }) => {
                return (
                  <div key={name} className="mb-2 mr-5">
                    <Tag text={name} href={`/experience/${slug(name)}`} />
                    <Link
                      href={`/experience/${slug(name)}`}
                      className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                      aria-label={`View experince tagged ${name}`}
                    >
                      {` (${count})`}
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
            {experienceData.map((d) => (
              // <Card
              //   key={d.title}
              //   company={d.company}
              //   title={d.title}
              //   description={d.description}
              //   imgSrc={d.imgSrc}
              //   href={d.href}
              // />
              <div key={d.title}>{d.title}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
