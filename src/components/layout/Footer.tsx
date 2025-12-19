import Link from "next/link";

export default function Footer() {
  return (
    <footer className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] tw-text-black dark:tw-text-white max-md:tw-flex-col">
      <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
        <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
          <Link href="#" className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
            <img src="/logo/logo.png" alt="logo" className="tw-max-w-[120px] dark:tw-invert" />
            <div className="tw-max-w-[120px] tw-text-center tw-text-3xl tw-h-fit">Zyene™</div>
          <span className="tw-text-gray-500 dark:tw-text-gray-400" style={{ fontSize: 9, lineHeight: "10px", marginTop: 2, whiteSpace: "nowrap" }}>Growth Powered by Intelligence</span>
          </Link>
          <div className="tw-flex tw-gap-4 tw-text-lg">
            <Link href="#" aria-label="Github"><i className="bi bi-github"></i></Link>
            <Link href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></Link>
            <Link href="#" aria-label="Linkedin"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
        <div className="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-xl">Resources</h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <Link href="#" className="footer-link">Getting started</Link>
              <Link href="#" className="footer-link">API Docs</Link>
              <Link href="#" className="footer-link">API Endpoints</Link>
              <Link href="#" className="footer-link">Health status</Link>
              <Link href="#" className="footer-link">Pricing</Link>
            </div>
          </div>
          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-xl">Company</h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <Link href="#" className="footer-link">Support channels</Link>
              <Link href="#" className="footer-link">Systems</Link>
              <Link href="#" className="footer-link">Blog</Link>
              <Link href="#" className="footer-link">Twitter</Link>
              <Link href="#" className="footer-link">Github</Link>
            </div>
          </div>
          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-xl">Legal</h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <Link href="#" className="footer-link">Terms of service</Link>
              <Link href="#" className="footer-link">Privacy Policy</Link>
              <Link href="#" className="footer-link">DCMA - Content Takedown</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="tw-mt-8" />
      <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
        <span>Copyright © 2023-2025</span>
        <span>All trademarks and copyrights belong to their respective owners.</span>
      </div>
    </footer>
  );
}
