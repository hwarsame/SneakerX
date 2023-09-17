import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-sky-400 inline-block mt-3"> Super </span>{" "}
          <span className="text-sky-400 inline-block mt-3"> Quality </span>{" "}
          SneakerZ
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Elevate your style effortlessly with SneakerX. Our commitment to
          quality is stitched into every pair, ensuring unparalleled comfort and
          durability. Discover the perfect blend of fashion and function,
          designed to keep you stepping confidently.
        </p>
        <p className="mt-6 lg:max-2-lg font-montserrat text-slate-gray font-semibold text-lg capitalize">
          SneakerX: where quality defines style.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
