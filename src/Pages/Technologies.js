import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    nextjs,
    reactNative,
    tailwind,
    bootstrap,
    vscode,
    shopify,
    wordpress,
    git,
    github,
    postman,
    figma,
    mongodb,
    nodejs,
    express
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={nextjs} title="NextJS" alt="NextJS" />
        <img src={reactNative} title="ReactNative" alt="ReactNative" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={nodejs} title="Nodejs" alt="Nodejs" />
        <img src={express} title="ExpressJs" alt="ExpressJs" />
        <img src={mongodb} title="MongoDB" alt="MongoDB" />
        <img src={shopify} title="Shopify" alt="Shopify" />
        <img src={wordpress} title="Wordpress" alt="Wordpress" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
