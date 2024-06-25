import ImgCharacter from "../assets/image/hero-character.png";

const HeroBanner = () => {
  return (
    <>
      <div
        id="hero"
        className="bg-hero-banner overlay flex min-h-dvh items-center bg-cover px-20"
      >
        <div className="grid grid-cols-2 place-content-center place-items-center content-center justify-items-center gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-[48px] font-semibold leading-[58px] text-[#fff]">
              Experience the Ultimate Battle in{" "}
              <span className="text-secondry">NovariaGame</span>
            </h1>
            <p className="text-[20px]">
              Join the fight, master your skills, and become the legend.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-secondry px-8 py-3 text-[16px] text-[#fff]">
                Play Now
              </button>
              <button className="rounded-lg border border-solid border-secondry px-8 py-3 text-[16px] text-secondry">
                Watch Trailer
              </button>
            </div>
          </div>
          <div>
            <img
              src={ImgCharacter}
              alt="img-character"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
