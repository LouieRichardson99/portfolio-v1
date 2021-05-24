import Image from "next/image";

export default function HeroPortraitDiv() {
  return (
    <div className="sm:flex relative justify-center hidden">
      <div className="text-3xl text-gray-800 absolute -left-10 bottom-1 hidden sm:block">
        <a
          rel="noopener"
          href="https://twitter.com/louie_rich99"
          target="_blank"
          aria-label="Twitter"
        >
          <i
            aria-label="Twitter link icon"
            className="block fab fa-twitter pb-2 hover:text-red-600"
          ></i>
        </a>
        <a
          rel="noopener"
          href="https://github.com/LouieRichardson99"
          target="_blank"
          aria-label="GitHub"
        >
          <i
            aria-label="Github link icon"
            className="block fab fa-github hover:text-red-600"
          ></i>
        </a>
      </div>
      <div className="mt-12 sm:mt-0 mx-auto sm:mx-0">
        <Image
          loading="eager"
          className="rounded-xl"
          src="/louie-richardson.jpg"
          width="275"
          height="275"
          alt="Louie Richardson, Website Developer"
          priority={true}
        />
      </div>
    </div>
  );
}
