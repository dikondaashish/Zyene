export default function TrustedBrands() {
  return (
    <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8">
      <h2 className="tw-text-3xl max-md:tw-text-xl">
        Trusted by brands you love
      </h2>

      <div className="carousel-container">
        <div className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2">
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/google.svg" alt="Google" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/microsoft.svg" alt="Microsoft" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/adobe.svg" alt="Adobe" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/airbnb.svg" alt="Airbnb" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/stripe.svg" alt="Stripe" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
          <div className="carousel-img tw-h-[30px] tw-w-[150px]">
            <img src="/images/brand-logos/reddit.svg" alt="Reddit" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
