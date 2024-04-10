"use client";
import React from "react";
import { TracingBeam } from "../../components/ui/tracing-beam";

const page = () => {
  return (
    <TracingBeam className="px-6 ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
        <div className="mb-3 text-white mt-[20vh]">
          <h2 className="heading3 rounded-full text-sm w-fit px-4 py-1 mb-4">
            Privacy Policy
          </h2>

          <p className="text-xl mb-4">Last updated: April 09, 2024</p>
          <p className="text-xl mb-4">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p className="text-xl ">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the Privacy Policy
            Generator.
          </p>

          <div className="mb-10 text-white mt-[20vh]">
            <h2 className="heading3 rounded-full text-sm w-fit px-4 py-1 mb-4">
              Interpretation and Definitions
            </h2>
            <h5 className="base-bold rounded-full text-sm w-fit px-4 py-1 mb-4">
              Interpretation
            </h5>
            <p className="text-xl mb-8">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h5 className="base-bold rounded-full text-sm w-fit px-4 py-1 mb-4">
              Definitions
            </h5>

            <p className="text-xl mb-5">For the purposes of this Privacy Policy:</p>
            <ul className="text-xl list-disc flex flex-col gap-5">
              <li>
                Account means a unique account created for You to access our
                Service or parts of our Service.
              </li>
              {/* Other list items */}
            </ul>
          </div>

          {/* Other sections of the Privacy Policy */}
        </div>

        {/* Contact Us section */}
        <div className="mb-[10rem] text-white mt-[20vh]">
          <h2 className="heading3 rounded-full text-sm w-fit px-4 py-1 mb-4">
            Contact Us
          </h2>

          <p className="text-xl mb-4">
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <ul className="text-xl list-disc flex flex-col gap-5">
            <li>
              By phone number: 9631494191
            </li>
          </ul>
        </div>
      </div>
    </TracingBeam>
  );
};

export default page;
