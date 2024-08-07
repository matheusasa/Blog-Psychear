import Link from "next/link";

const Feedback = () => {
  return (
    <div className="px-[80px] pb-[125px]">
      <div className="w-full border rounded bg-lightyellow h-[500px] flex">
        <div className="p-[80px] w-[50%]">
          <div className=" text-2xl">FEEDBACK</div>
          <div className="text-5xl font-bold">
            O que as pessoas estão falando da clinica{" "}
          </div>
          <div className="py-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="text-2xl">
            <Link href="https://www.doctoralia.com.br/clinicas/psychear-clinica-de-psicologia#facility-opinion-stats">
              Saiba mais &gt;
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-[80px] w-[50%]">
          <div className="py-[16px] font-bold text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
