const Tag = ({ str }) => {
  return (
    <div className="m-2">
      <span className="bg-transparent read-the-docs font-semibold  py-1 px-3 border border-#888 rounded-full cursor-auto text-center my-6">
        {str}
      </span>
    </div>
  );
};

export default Tag;
