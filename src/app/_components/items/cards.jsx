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
    <div className="flex flex-col text-center justify-center items-center bg-blue-500 border-1 border-blue-900 m-4 text-white font-semibold rounded-full p-8 cursor-pointer w-42 aspect-square active:scale-98
    hover:bg-blue-700 hover:scale-103
    
    
    ">
      <div className="flex justify-center items-center">
        <Icon className="text-4xl mb-2" />
      </div>
      <p className="text-lg select-none">{description}</p>
    </div>
  );
};
