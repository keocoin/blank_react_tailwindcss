import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Loading = () => {
  return (
    <>
      <div className="w-full">
        <ArrowPathIcon className="h-10 w-10 mx-auto animate-spin" />
      </div>
    </>
  );
};

export default Loading;
