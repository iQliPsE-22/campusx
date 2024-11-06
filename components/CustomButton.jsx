const CustomButton = ({ text, color,hover_color }) => {
  return (
    <button
      className={`inter w-full lg:w-2/5 mt-4 px-6 py-3 ${color} hover:${hover_color} text-white font-semibold rounded-lg shadow-md  transition duration-200`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
