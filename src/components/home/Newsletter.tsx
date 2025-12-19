import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%] max-md:tw-px-2">
      <div className="tw-flex tw-w-full tw-max-w-[80%] tw-place-content-center tw-place-items-center tw-justify-between tw-gap-3 tw-rounded-lg tw-bg-[#F6F7FB] dark:tw-bg-[#171717] tw-p-6 max-md:tw-max-w-full max-md:tw-flex-col">
        <div className="tw-flex tw-flex-col max-lg:tw-text-center tw-gap-1">
          <h2 className="tw-text-2xl tw-text-gray-800 dark:tw-text-gray-200 max-md:tw-text-xl">Join our newsletter</h2>
          <div className="tw-text-gray-700 dark:tw-text-gray-300">Get product insights and updates.</div>
        </div>
        <div className="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2">
          <input type="email" className="input tw-h-full tw-w-full !tw-border-gray-600 tw-p-2 tw-outline-none" placeholder="email" />
          <Link className="btn !tw-rounded-full !tw-border-[1px] !tw-text-black !tw-border-solid !tw-border-black dark:!tw-text-white dark:!tw-border-gray-300 !tw-bg-transparent tw-transition-colors tw-duration-[0.3s]" href="#">Signup</Link>
        </div>
      </div>
    </section>
  );
}
