import Link from "next/link";

export default function PrebuiltTools() {
  return (
    <section className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6">
      <div className="tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
        <div className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col tw-place-items-start tw-gap-4 tw-p-2 max-lg:tw-place-items-center max-lg:tw-place-content-center max-lg:tw-w-full">
          <div className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden">
            <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium max-md:tw-text-3xl">Pre-built AI Tools</h2>
            <Link href="#" className="btn !tw-mt-8 !tw-bg-transparent !tw-text-black !tw-border-[1px] !tw-border-black dark:!tw-border-white dark:!tw-text-white">Start Chat</Link>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%] max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%] tw-place-items-center">
          {/* AI Code Generator */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-code-square"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">AI code generator</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* PDF Generator */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-file-pdf-fill"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">PDF generator</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Use AI tools to automate PDF creation and content extraction, improving document management and data processing.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* Image Generation */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 tw-transition-all dark:tw-shadow-[#171717] tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-image-fill"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">Image generation</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* AI Analytics */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full dark:tw-shadow-[#171717] tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-bar-chart-line-fill"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">AI Analytics</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* Music Generator */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl dark:tw-shadow-[#171717] hover:tw-shadow-lg tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-music-note-beamed"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">Music generator</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Access our AI music generation tools create original compositions from input parameters, enabling effortless music creation for various needs.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* Video Generator */}
          <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
            <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
              <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-camera-video-fill"></i></div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-2xl max-md:tw-text-xl">Video generator</h3>
                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Use our AI video generation tools create videos from text or templates, streamlining content creation and production.</p>
                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
