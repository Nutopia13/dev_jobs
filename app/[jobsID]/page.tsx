import React from "react";
import data from "../../data.json";
import Link from "next/link";


const Job = () => {

  return (
    <>
    {data.map((job) => (
      <div>
      <div className="head_text relative z-30 bottom-4 text-base pb-8 mx-7 lg:mx-44 rounded-md dark:text-white bg-white flex-col md:flex-row md:justify-between dark:bg-primary_dark_blue flex justify-center items-center space-y-6 ">
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-bold text-xl">{job.company}</h4>
          <a href="" className="text-[#6E8098] pt-2">
            {}
          </a>
        </div>

        <button className="py-4 md:px-8 md:mr-10 px-5 bg-[#5964E0]/10 rounded-md font-bold text-base text-[#5964E0]">
          Company Site
        </button>
      </div>

      <div className="text-base lg:mx-44   pt-10 px-8 mt-6 mx-7 rounded-md dark:text-white bg-white flex-col dark:bg-primary_dark_blue flex justify-center ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-[#6E8098]">1w ago • Part Time</p>
            <h3 className="dark:text-white py-2 font-bold text-xl">
              Senior Software Engineer
            </h3>
            <p className="font-bold text-dark_viol text-sm">
              United Kingdrom
            </p>
          </div>
          <button className="py-4 mt-12 md:mt-0 px-20 md:px-12 bg-[#5964E0] rounded-md font-bold text-base text-white">
            Apply Now
          </button>
        </div>
        <div className="pt-8">
          <p className="text-[#6E8098]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo,
            eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
            Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
            pede semper est, vitae luctus metus libero eu augue. Morbi purus
            libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
            lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
            felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
            arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <h4 className="font-bold pt-10 pb-6 text-[#19202D] dark:text-white text-xl">
            Requirements
          </h4>
          <p className="text-[#6E8098]">
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
            magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
            facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
            adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
            ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
            mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
            ornare a, lacinia eu, vulputate vel, nisl.
          </p>
          <ul className="text-[#6E8098] pt-8 list-disc">
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
              vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
              lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ul>
          <h4 className="font-bold pt-10 pb-6 text-[#19202D] dark:text-white text-xl">
            What Will You Do
          </h4>
          <p className="text-[#6E8098]">
            Sed egestas, ante et vulputate volutpat, eros pede semper est,
            vitae luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <ol className="list-decimal text-[#6E8098] mb-10">
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
              vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
              lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ol>
        </div>
      </div>
      <div className="flex mt-16 bg-white justify-center  items-center dark:bg-primary_dark_blue text-white ">
        <div className="hidden md:flex"></div>
        <a href="">
          <button className="py-4 my-6 px-28 bg-[#5964E0] rounded-md font-bold text-base text-white">
            Apply Now
          </button>
        </a>
      </div>
    </div>
    ))}
      
    </>
  );
};

export default Job;
