export const DefaultCard = ({ text1, text2 }) => {
  return (
    <div className="flex-1 min-w-[300px] border-1 border-green-950 bg-(--c60)  shadow-lg rounded-lg p-6 my-5 mx-3 hover:bg-(--c60h) transition-all duration-200 ease-in-out hover:scale-y-105 active:scale-98">
      <h3 className="text-base font-normal mb-4">{text1}</h3>
      <p className="text-gray-800">{text2}</p>
    </div>
  );
};

export const BlueBubble = ({ icon, description }) => {
  const Icon = icon;

  return (
    <div
      className="flex flex-col text-center justify-center items-center bg-(--c30) border-1 border-blue-900 m-4 text-white font-semibold rounded-full p-8 cursor-pointer w-42 aspect-square active:scale-98
      hover:bg-(--c30h) hover:scale-103"
    >
      <div className="flex justify-center items-center">
        <Icon className="text-4xl mb-2" />
      </div>
      <p className="text-lg select-none">{description}</p>
    </div>
  );
};
