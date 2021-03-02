import Image from "next/image";

export default function HeroPortraitDiv() {
    return (
        <div className="flex relative justify-center">
          <div className="text-3xl text-gray-800 absolute -left-10 bottom-1 hidden sm:block">
            <a href="https://twitter.com/louie_rich99" target="_blank"><i aria-hidden className="block fab fa-twitter pb-2 hover:text-red-600"></i></a>
            <a href="https://github.com/LouieRichardson99" target="_blank"><i aria-hidden className="block fab fa-github hover:text-red-600"></i></a>
          </div>
          <div className="mt-12 sm:mt-0 mx-auto sm:mx-0">
            <Image 
              className="rounded-xl"
              src="/louie-richardson.jpg" 
              width="275" 
              height="275" 
              alt="Louie Richardson, Website Developer"
            />
          </div>
        </div>
    )
}
