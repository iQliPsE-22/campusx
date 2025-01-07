import Image from "next/image";
import CustomButton from "./../CustomButton";
const Hero_Block = ({
  img,
  heading,
  text,
  button_text,
  color,
  hover_color,
}) => {
  return (
    <>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-4 p-8">
        <Image
          src={img}
          alt="Writer"
          width="50"
          height="50"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 space-y-3  ">
        <h2 className="quicksand text-2xl font-bold text-blue-600">
          {heading}
        </h2>
        <p className="text-gray-700 text-sm lg:text-lg leading-relaxed">
          {text}
        </p>
        <CustomButton text={button_text} color={color} hover_color={hover_color} />
      </div>
    </>
  );
};

export default Hero_Block;
