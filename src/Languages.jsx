const Languages = () => {
  return (
    <div className="my-10">
      <h5 className="text-2xl font-semibold">🔡 Languages</h5>

      <div className="mt-5 mb-2 text-base font-medium">English</div>
      <div className="w-4/5 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "90%" }}
        ></div>
      </div>
      <div className="mt-5 mb-2 text-base font-medium">French</div>
      <div className="w-4/5 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "20%" }}
        ></div>
      </div>
    </div>
  );
};

export default Languages;
