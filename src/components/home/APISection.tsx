import Link from "next/link";

export default function APISection() {
  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">   
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4">
        <div className="purple-bg-grad tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"></div>
        <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase">
          <span className="tw-font-semibold">Build your own AI Apps </span>
          <br />
          <span className="tw-font-serif">on top of Pixa APIs</span>
        </h2>
        <p className="tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm">   
          Pixa&apos;s Playground is powered by Pixa&apos;s cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering 
          advanced capabilities in summarization, text generation, and Q&amp;A handling. 
        </p>
        <div className="tw-flex tw-mt-8">
          <Link href="#" className="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300 
                          tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md">
            Check Pixa APIs
          </Link>
        </div>
      </div>
    </section>
  );
}
