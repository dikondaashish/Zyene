"use client";

import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    const initFAQ = () => {
      const faqAccordions = document.querySelectorAll('.faq-accordion');
      faqAccordions.forEach((btn) => {
        btn.addEventListener('click', function(this: HTMLElement) {
          const faq = this.closest('.faq');
          if (!faq) return;
          const content = faq.querySelector('.content') as HTMLElement | null;
          const icon = this.querySelector('i');
          if (!content) return;
          const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
          if (isOpen) {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            if (icon) icon.style.transform = 'rotate(0deg)';
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            if (icon) icon.style.transform = 'rotate(45deg)';
          }
        });
      });
    };

    const timer = setTimeout(() => {
      initFAQ();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
      <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">Faq</h3>
      <div className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4">
        <div className="faq tw-w-full">
          <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
            <span>What&apos;s Pixa playground?</span>
            <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
          </h4>
          <div className="content max-lg:tw-text-sm">Pixa&apos;s playground is an integrated webapp to seamlessly test different LLM models such as GPT4, Claude, Gemini, etc.</div>
        </div>
        <hr />
        <div className="faq tw-w-full">
          <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
            <span>What are LLM?</span>
            <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
          </h4>
          <div className="content max-lg:tw-text-sm">LLM stands for &quot;Large Language Model.&quot; It&apos;s a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text.</div>
        </div>
        <hr />
        <div className="faq tw-w-full">
          <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
            <span>Where can I test different AI models?</span>
            <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
          </h4>
          <div className="content max-lg:tw-text-sm">You can use Pixa&apos;s AI Playground to test different models, including GPT4, Claude, Perplexity and more.</div>
        </div>
        <hr />
        <div className="faq tw-w-full">
          <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
            <span>Is Pixa Free to use?</span>
            <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
          </h4>
          <div className="content max-lg:tw-text-sm">You can start using Pixa for free, and later upgrade your plan to access all its features.</div>
        </div>
        <hr />
      </div>
      <div className="purple-bg-grad max-md:tw-hidden tw-absolute tw-bottom-14 tw-right-[20%] tw-h-[150px] tw-w-[150px] tw-rounded-full"></div>
    </section>
  );
}
