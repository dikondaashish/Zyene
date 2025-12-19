import Link from "next/link";

export default function OneSubscription() {
  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-place-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">One Subscription for it all</h3>
        <p className="tw-mt-3 tw-max-w-[600px] tw-text-center">Why pay for multiple expensive subscriptions when one subscription can do it all? Access multiple AI models and save 1000&apos;s of dollar per year.</p>
        <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">
          <div className="tw-flex tw-w-full tw-max-w-[650px] max-md:tw-max-w-full tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]">
            <img src="/images/home/multi-sub.png" alt="Multi sub" />
          </div>
          <div className="tw-flex tw-w-full tw-max-w-[650px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]">
            <img src="/images/home/single-sub.jpg" alt="Single sub" />
          </div>
        </div>
        <Link href="#" className="tw-group tw-shadow-xl btn tw-flex tw-gap-2 tw-mt-10">
          <span>Start Chat</span>
          <i className="bi bi-arrow-right tw-duration-300 group-hover:tw-translate-x-1"></i>
        </Link>
      </div>
    </section>
  );
}
