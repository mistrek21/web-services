import Image from "next/image";

export default function Home() {
  return (
    <div className="grid p-5 md:grid-cols-2 lg:px-24">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold">Help</span> Mr. White
        </h1>
        <p className="textBlock-subtitle">
          My dad is amazing. Recently i find out he is going to die. I need your
          help to keep my dad and the series alive
        </p>
        <button className="w-32 p-2 text-2xl font-medium tracking-wider text-black uppercase bg-yellow focus:outline-none lg:w-48">
          Donate
        </button>
      </div>
      <div>
        <Image
          src="/assets/walter.png"
          height={640}
          width={670}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
