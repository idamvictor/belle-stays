import Image from "next/image"

import { Eyebrow } from "@/components/eyebrow"
import { EnquiryForm } from "@/components/leads/enquiry-form"
import { footer, site, socials } from "@/content/home"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-forest pt-20 text-white lg:pt-32">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,540px)_minmax(0,650px)] lg:justify-between">
          <div>
            <Image src="/brand/monogram-light.png" alt={site.name} width={1025} height={863} className="h-36 w-auto lg:h-44" />
            <p className="mt-8 max-w-[540px]">{footer.about}</p>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h2>Contact</h2>
                <address className="mt-4 text-lg not-italic leading-normal">
                  <a href={`mailto:${site.email}`} className="hover:text-copper">
                    {site.email}
                  </a>
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 block w-fit hover:text-copper">
                    {site.address[0]}
                    <br />
                    {site.address[1]}
                  </a>
                </address>
                <h2 className="mt-10">Social</h2>
                <ul className="mt-4 flex gap-2">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="block transition-opacity hover:opacity-70"
                      >
                        <Image src={social.icon} alt="" width={35} height={35} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <nav aria-labelledby="footer-menu">
                <h2 id="footer-menu">Menu</h2>
                <ul className="mt-4 grid gap-3 font-heading text-[40px] leading-none font-medium">
                  {footer.menu.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="transition-colors hover:text-copper">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="bg-black/20 px-5 pt-12 pb-10 sm:px-[50px]">
            <Eyebrow tone="white" size="sm">
              {footer.enquiryEyebrow}
            </Eyebrow>
            <p className="mt-[18px] font-heading text-[30px] leading-[1.2] font-medium">{footer.enquiryTitle}</p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/30 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {footer.copyrightYear} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-copper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
