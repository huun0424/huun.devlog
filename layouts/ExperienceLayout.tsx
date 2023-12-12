'use client';

import Card from '@/components/Card';
import experienceData, { companyList } from '@/data/experienceData';
import Link from 'next/link';

import { slug } from 'github-slugger';
import Tag from '@/components/Tag';

export default function ExperienceLayout() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-12">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work Experience
          </h1>
          <div className="text-lg leading-5 text-gray-500 dark:text-gray-400">
            <p>6년간 재직한 회사에서 참여한 경력 리스트</p>
            <div className="flex max-w-lg flex-wrap">
              <p className="mb-2 mr-1 mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                회사 별 참여 프로젝트 :
              </p>
              {companyList.map(({ name, count }) => {
                return (
                  <div key={name} className="mb-2 mr-5 mt-2">
                    <Tag text={name} />
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
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {experienceData.map((d) => (
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
