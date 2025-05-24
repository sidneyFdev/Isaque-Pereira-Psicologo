export const GreenCard = ({ text1, text2 }) => {
  return (
    <div className="bg-green-500 shadow-lg rounded-lg p-6">
      <h3 className="text-base font-normal mb-4">{text1}</h3>
      <p className="text-gray-700">{text2}</p>
    </div>
  );
};

export const BlueBubble = ({ icon, description }) => {

  const Icon = icon

  return (
    <div className="text-center flex flex-col justify-center items-center bg-blue-500 text-white rounded-full p-4 mb-4 h-40 w-40 cursor-pointer">
      <div className="flex justify-center items-center">
        <Icon className="text-4xl mb-2" />
      </div>
      <p className="text-lg select-none">{description}</p>
    </div>
  );
};
