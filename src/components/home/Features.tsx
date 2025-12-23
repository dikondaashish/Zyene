import Link from "next/link";

export default function Features() {
  return (
    <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">   
      <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5">
        <div className="tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
          <h2 className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2">
            Experience all the benefits of AI
          </h2>
        </div>
        <div className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full tw-p-4 max-lg:tw-place-content-center tw-gap-8">   
          <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 tw-place-content-center tw-auto-rows-auto">
            {/* Feature Card 1 */}
            <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
              <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                <div className="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">
                  <img src="/images/home/api.png" className="tw-w-full tw-object-contain tw-h-auto" alt="unified interface" />
                </div>
                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Unified interface</h2>
                <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                  Our&apos;s is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform.
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
              </Link>
            </div>

            {/* Feature Card 2 */}
            <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
              <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                <div className="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">
                  <img src="/images/home/api.png" alt="API" className="tw-w-full tw-h-auto tw-object-contain" />
                </div>
                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">API Access</h2>
                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                  Pixa&apos;s LLM API offers advanced summarization, text generation, and question-answering.
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
              <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                  <img src="/images/home/integrations1.png" className="tw-w-full tw-h-auto tw-object-contain" alt="Prebuilt integrations" />
                </div>
                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Pre-built Tools</h2>
                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                  Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation.
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
              </Link>
            </div>
          </div>
          
          {/* AI Models Card */}
          <div className="tw-w-full md:tw-h-[350px] max-md:tw-min-h-[350px] tw-flex">
            <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex max-md:tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
              <div className="tw-text-6xl tw-overflow-hidden tw-rounded-xl tw-w-full tw-h-full max-md:tw-h-[180px]">
                <img src="/images/home/ai-models.png" className="tw-w-full tw-object-contain tw-h-full" alt="AI models" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Multiple AI models</h2>
                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                  Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and more.
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
