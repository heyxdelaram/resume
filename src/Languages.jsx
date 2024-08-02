const Languages = () => {
  return (
    <div>
      <h5 className="text-2xl font-semibold">🔡 Languages</h5>
      <div className="my-10 flex flex-col flex-wrap justify-center items-center">
        <div className="w-3/5 rounded-full mb-4 bg-slate-700">
          <div
            className="bg-blue-600 text-slate-950 text-center p-0.5 leading-none rounded-full font-bold text-base"
            style={{ width: "90%" }}
          >
            English &#127482;&#127480;
          </div>
        </div>
        <div className="w-3/5 rounded-full mb-4 bg-slate-700">
          <div
            className="bg-blue-600 text-slate-950 text-center p-0.5 leading-none rounded-full font-bold text-base"
            style={{ width: "20%" }}
          >
            French &#127467;&#127479;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
