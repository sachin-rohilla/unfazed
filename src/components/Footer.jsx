import { footerData } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-8 flex flex-col px-4 lg:px-0 lg:flex-row ">
      <div className=" flex flex-col gap-2  lg:ml-36 lg:w-[27%] font-poppins ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={170}
            height={170}
            className=" h-10 object-cover -ml-2"
          />
        </Link>
        <p className="text-sm">Center for psychology & counseling.</p>
        <div className="flex items-center gap-3 mt-1">
          <Link href={"https://www.facebook.com"}>
            <Image
              src="/fb.png"
              alt="facebook"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"https://www.twitter.com"}>
            <Image
              src="/twitter.png"
              alt="twitter"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"https://www.linkedin.com"}>
            <Image
              src="/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="flex-grow mt-4 lg:mt-0">
        <p className="text-xl font-medium flex items-center gap-2 font-castoro">
          Career Opportunities
          <BsArrowRight className="text-2xl" />
        </p>
        <p className="text-xl font-medium flex mt-4 items-center gap-2 font-castoro">
          Our Approach
          <BsArrowRight className="text-2xl" />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {footerData?.map((data) => (
            <div key={data?.id}>
              <p className="font-semibold text-orange uppercase">
                {data?.title}
              </p>

              <div className="flex flex-col gap-2 mt-4">
                {data?.links?.map((link) => (
                  <Link
                    href={"/"}
                    className="hover:text-orange hover:underline"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
