const Languages = () => {
  return (
    <div className="my-10 ">
      <h5 className="text-2xl font-semibold">🔡 Languages</h5>

      <div className="mt-5 mb-2 text-base font-medium">
        English &#127482;&#127480;
      </div>
      <div className="w-4/5 rounded-full h-2.5 mb-4 bg-stone-600">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "90%" }}
        ></div>
      </div>
      <div className="mt-5 mb-2 text-base font-medium">
        French &#127467;&#127479;
      </div>
      <div
        className="w-4/5 bg-stone-600
       rounded-full h-2.5 mb-4"
      >
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "20%" }}
        ></div>
      </div>
    </div>
  );
};

export default Languages;
