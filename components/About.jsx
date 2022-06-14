import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">I Am not a normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            similique doloribus voluptate dolorum fugiat, officiis praesentium,
            quod blanditiis quas delectus, alias saepe fugit laborum porro quos
            repellat rem illo. Tenetur!
          </p>

          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            similique doloribus voluptate dolorum fugiat, officiis praesentium,
            quod blanditiis quas delectus, alias saepe fugit laborum porro quos
            repellat rem illo. Tenetur!
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest professional works
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rouded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <img
            className="rounded-xl"
            src="https://intl-blog.imgix.net/wp-content/uploads/2021/08/Tech-stack-BR-Capterra-Header.png?w=768"
            alt="some computer image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
