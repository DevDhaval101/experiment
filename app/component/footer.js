import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3e67be] text-white py-4">
      <p className="text-center text-2xl pb-4">Contact Info</p>
      <div className="flex flex-row justify-center">
        <div className="">
          <p className="text-xl">Phone</p>
          <a
            className="flex mr-8"
            target="_blank"
            href="tel:+917575098026"
            title="Give us a call"
          >
            <Image
              className="flex-shrink-0 mr-1 w-auto"
              src="/images/social/telephone.png"
              alt="phone icon"
              width={24}
              height={24}
            ></Image>
            | connect@sivector.com
          </a>
        </div>
        <div>
          <p className="text-xl">Email</p>
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
        </div>
      </div>
    </footer>
  );
}
