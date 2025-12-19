export default function AdditionalFeatures() {
  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">Additional Features</h3>
        <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">
          {/* Prompt Library */}
          <div className="tw-w-[350px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] max-md:tw-w-[320px] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/prompts2.png" alt="Prompt library" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">Prompt Library</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Forget about writing your own prompt, use the prompt templates and supercharge your workflow.</p>
          </div>
          {/* Real-time Web Search */}
          <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/search.png" alt="Web search" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">Real-time web search</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.</p>
          </div>
          {/* Image Generation */}
          <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/image.png" alt="Image generation" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">Image Generation</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Generate Image instantly from multiple models, create visuals from text descriptions or templates.</p>
          </div>
          {/* History */}
          <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/history.png" alt="History" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">History</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">All of the models can recall previous topic, so you can continue your conversation at any point of time.</p>
          </div>
          {/* Import Content */}
          <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/import.png" alt="Import content" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">Import content</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.</p>
          </div>
          {/* Multilingual */}
          <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
            <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
              <img src="/images/home/multilingual.png" alt="Multilingual" className="tw-w-auto tw-h-full tw-object-contain" />
            </div>
            <h3 className="tw-text-2xl">Multilingual support</h3>
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">ChatGPT, and Gemini can understand and respond in over 100 languages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
