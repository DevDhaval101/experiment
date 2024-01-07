import Image from 'next/image'

export default function ContectRibbon() {
  return (
    <section className="bg-[#144bba] flex justify-between items-center px-6 py-2">
      <div className=" text-white">
        <ul className="flex flex-col gap-2 md:flex-row">
          <li>
            <a
              className="flex mr-8"
              target="_blank"
              href="mailto:connect@sivector.com"
              title="E-mail Us"
            >
              <Image
                className="flex-shrink-0 mr-1 w-auto"
                src="/images/social/email.png"
                alt="email icon"
                width={24}
                height={24}
              ></Image>
              | connect@sivector.com
            </a>
          </li>
          <li>
            <a
              className="flex mr-8"
              target="_blank"
              href="https://www.linkedin.com/company/sivector-technology-pvt-ltd/"
              title="Connect to us on Linkedin"
            >
              <Image
                className="flex-shrink-0 mr-1"
                src="/images/social/linkedin.png"
                alt="linkedin icon"
                width={24}
                height={24}
              ></Image>
            </a>
          </li>
          <li>
            <a
              className="flex"
              target="_blank"
              href="tel:+917575098026"
              title="Give us a call"
            >
              <Image
                className="flex-shrink-0 mr-1"
                src="/images/social/telephone.png"
                alt="phone icon"
                width={24}
                height={24}
              ></Image>
              | +917575098026
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
