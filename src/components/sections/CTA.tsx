import Link from "next/link";

export default function CTA() {
  return (
    <section className="tw-relative tw-flex tw-p-2 tw-w-full tw-min-h-[60vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full tw-h-full tw-min-h-[450px] max-lg:tw-max-w-full tw-rounded-md lg:tw-py-[5%] tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">Not sure where to start?</h3>
        <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">
          <Link href="#" className="btn !tw-rounded-full !tw-p-4 tw-font-medium">Book Free Strategy Call</Link>
          <Link href="#" className="btn !tw-rounded-full !tw-p-4 tw-font-medium">Get Custom Proposal</Link>
        </div>
      </div>
    </section>
  );
}
