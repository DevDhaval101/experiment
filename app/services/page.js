import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="h-20 bg-gradient-to-r from-[rgb(24,117,255)] to-[rgb(139,221,255)] flex justify-center items-center">
        <p className="text-3xl">Our services</p>
      </div>
      <section className="flex md:w-[70%] w-[90%] mx-auto">
        <div className="grid grid-cols-1">
          <div id="1" className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/1.DFT Architecture and Implementation.jpg"
              width={500}
              height={375}
              alt="DFT image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">
                DFT Architecture and Implementation
              </p>
              <ul className="list-disc mx-6 mt-2">
                <li>Planning of Flow and Methodology Development</li>
              </ul>
            </div>
          </div>
          <div id="2"className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/2.Scan Insertion.jpg"
              width={500}
              height={375}
              alt="Scan Insertion image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">Scan Insertion</p>
              <ul className="list-disc mx-6 text-justify mt-2">
                <li>
                  Hierarchical Scan, CODEC, Test Point insertion, Core Wrapping
                  (Intest-Extest), OCC insertion & Configuration, DRC fixes,
                  Defining & Configuring various test modes
                </li>
                <li>Implementation of DFT for low pin count design</li>
                <li>
                  Implementation of hardware for power-aware and multiple power
                  domain design
                </li>
                <li>
                  Implementation of support for miscellaneous tests and
                  diagnosis support
                </li>
                <li>LBIST insertion and verification</li>
                <li>Logic equivalent checks</li>
                <li>
                  Implementation of Security and functional safety features
                </li>
              </ul>
            </div>
          </div>
          <div id="3"className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/3.ATPG Pattern Generation.jpg"
              width={500}
              height={375}
              alt="ATPG Pattern Generation image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">
                ATPG Pattern Generation for Different Fault Models
              </p>
              <ul className="list-disc mx-6 text-justify mt-2">
                <li>
                  Generation of high-quality test and debug patterns for
                  Stuck-at, Transition, Small delay defect, Cell aware Fault
                  Model for block and top level
                </li>
                <li>
                  Coverage analysis and improvement by reviewing test flow and
                  design
                </li>
                <li>
                  Improving test quality by TPI, TAT/TDV analysis and quality
                  review for overall test program
                </li>
                <li>Pattern retargeting using IJTAG</li>
                <li>Simulation of test vectors across the corners</li>
              </ul>
            </div>
          </div>
          <div id="4" className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/4.MBIST.jpg"
              width={500}
              height={375}
              alt="MBIST image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">MBIST</p>
              <ul className="list-disc mx-6 text-justify mt-2">
                <li>MBIST insertion and verification</li>
                <li>Implementing hardware for repair and non-repair test</li>
                <li>Timing and no-timing simulation</li>
                <li>Production pattern generation</li>
              </ul>
            </div>
          </div>
          <div id="5" className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/5.IO Testing.jpg"
              width={500}
              height={375}
              alt="IO Testing image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">IO Testing</p>
              <ul className="list-disc mx-6 text-justify mt-2">
                <li>Implementation of Boundary Scan at SOC Level (1149.1)</li>
                <li>Loopback tests</li>
              </ul>
            </div>
          </div>
          <div id="6"className="flex flex-col md:flex-row my-2 border rounded-md">
            <Image
              src="/images/services/6.Post Silicon.jpg"
              width={500}
              height={375}
              alt="Post Silicon image"
              className="rounded-md md:w-[500px] md:h-[375px] w-[250px]]"
            ></Image>
            <div>
              <p className="text-xl font-medium mx-2 mt-2">
                Post Silicon Debug and ATE Support
              </p>
              <ul className="list-disc mx-6 text-justify mt-2">
                <li>Test Program review</li>
                <li>Post Silicon Support and ATE Bring up</li>
                <li>Test failure diagnosis and resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
