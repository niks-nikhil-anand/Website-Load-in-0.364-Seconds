import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { TermsAndConditionData } from '../constant/termsAndConditions'

interface TermItem {
  badge?: string;
  title?: string;
  heading?: string;
  image?: string;
  description?: React.ReactNode;
  Points?: React.ReactNode;
}

export function Blog() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {TermsAndConditionData.map((item: TermItem, index: number) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="heading rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
           
            <h2 className="heading2 text-gradient mb-4">{item.heading}</h2>
            <p className="text-xl text-white mb-4 heading3">{item.title}</p>

            <div className="paragraph-regular prose prose-sm dark:prose-invert text-white">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
           
            <div className="paragraph-regular prose prose-sm dark:prose-invert text-white mb-3 ">
              {item?.Points && (
                <ul>
                  {item.Points}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
