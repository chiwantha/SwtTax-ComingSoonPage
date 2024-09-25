import { Clipboard } from "flowbite-react";

const CopyToClipboard = () => {
  return (
    <div className="grid">
      <div className="relative">
        <input
          id="npm-install"
          type="text"
          className="col-span-6 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value="sam@voyajio.com"
          disabled
          readOnly
        />
        <Clipboard.WithIcon valueToCopy="sam@voyajio.com" />
      </div>
    </div>
  );
};

export default CopyToClipboard;
