import Image from "next/image";
import Link from "next/link";

import Form from "@/app/component/form";

export default function Home() {
  return (
    <>
      <div className="h-20 bg-gradient-to-r from-[rgb(24,117,255)] to-[rgb(139,221,255)] flex justify-center items-center">
        <p className="text-3xl">Our services</p>
      </div>

      <div className="m-2 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border rounded-md">
          <Image
            src="/images/services/1.DFT Architecture and Implementation.jpg"
            width={500}
            height={375}
            alt="DFT image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">
            DFT Architecture and Implementation
          </p>
          <Link href="/services#1" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
        <div className="border rounded-md">
          <Image
            src="/images/services/2.Scan Insertion.jpg"
            width={500}
            height={375}
            alt="Scan Insertion image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">Scan Insertion</p>
          <Link href="/services#2" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
        <div className="border rounded-md">
          <Image
            src="/images/services/3.ATPG Pattern Generation.jpg"
            width={500}
            height={375}
            alt="ATPG Pattern Generation image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">
            ATPG Pattern Generation for Different Fault Models
          </p>
          <Link href="/services#3" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
        <div className="border rounded-md">
          <Image
            src="/images/services/4.MBIST.jpg"
            width={500}
            height={375}
            alt="MBIST image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">MBIST</p>
          <Link href="/services#4" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
        <div className="border rounded-md">
          <Image
            src="/images/services/5.IO Testing.jpg"
            width={500}
            height={375}
            alt="IO Testing image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">IO Testing</p>
          <Link href="/services#5" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
        <div className="border rounded-md">
          <Image
            src="/images/services/6.Post Silicon.jpg"
            width={500}
            height={375}
            alt="Post Silicon image"
            className="rounded-md w-[342px] h-[256px]"
          ></Image>
          <p className="text-xl font-medium mx-2 mt-2">
            Post Silicon Debug and ATE Support
          </p>
          <Link href="/services#6" className="text-sm text-[#0d6efd] mx-2 py-4">
            Learn More...
          </Link>
        </div>
      </div>

      <div
        id="about-us"
        className="h-20 bg-gradient-to-r from-[rgb(24,117,255)] to-[rgb(139,221,255)] flex justify-center items-center"
      >
        <p className="text-3xl">About Us</p>
      </div>

      <section>
        <div className="flex flex-col-reverse md:flex-row items-center m-4 border rounded-md">
          <div className="p-2">
            <p className="text-xl font-medium">
              Welcome to SiVector Technology
            </p>
            <p className="my-3 text-justify">
              SiVector Technology is an ASIC DFT engineering service company
              within the domain of VLSI semiconductor design, embark by highly
              passionate, experienced, and dedicated team of DFT engineers.
            </p>
            <p className="my-3 text-justify">
              At SiVector Technology, we are committed to delivering exceptional
              quality and value to our clients worldwide. Our mission is to
              provide comprehensive and innovative solutions in the field of
              ASIC DFT, adhering to the highest industry standards. Our
              commitment to customer satisfaction, data privacy, excellence,
              cost efficient solution, our values are at the core of everything
              we do.
            </p>
            <p className="my-3 text-justify">
              What sets us apart is our team of highly skilled engineers who
              possess extensive expertise in the design and implementation of
              DFT methodologies for ASICs. With years of experience in the VLSI
              industry, we have honed our skills to navigate the complexities of
              modern chip design and ensure optimal testability, reliability,
              and efficiency for our clients' ASIC designs.
            </p>
            <p className="my-3 text-justify">
              Our services encompass a wide range of ASIC DFT engineering
              solutions tailored to meet our clients' specific needs. From scan
              insertion, ATPG development, Pattern Simulation and fault coverage
              analysis to post-silicon validation and debugging, we offer
              end-to-end support throughout the entire DFT lifecycle.
            </p>
            <p className="my-3 text-justify">
              We believe in establishing strong partnerships with our clients,
              working collaboratively to understand their unique requirements
              and challenges. By leveraging our deep domain knowledge and
              technical expertise, we aim to provide tailored solutions that
              optimize the overall test strategy, reduce time-to-market, and
              enhance the quality of ASIC designs.
            </p>
          </div>
          <div>
            <Image
              src="/images/general/about_us.jpg"
              width={500}
              height={333}
              alt="about-us image"
              className="rounded-2xl flex-shrink-0 w-[1500px] p-2"
            ></Image>
          </div>
        </div>
      </section>

      <div
        id="contact-us"
        className="h-20 bg-gradient-to-r from-[rgb(24,117,255)] to-[rgb(139,221,255)] flex justify-center items-center"
      >
        <p className="text-3xl">Contact Us</p>
      </div>

      <Form />
    </>
  );
}
