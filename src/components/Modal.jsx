import { useEffect, useState } from "react";

function Modal({ isOpen, onClose, duration }) {
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    if (isOpen) {
      setProgress(100);
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - 100 / (duration / 100);
          return newProgress > 0 ? newProgress : 0;
        });
      }, 100);

      const timeout = setTimeout(() => {
        onClose();
      }, duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isOpen, duration, onClose]);
  if (!isOpen) return;
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 w-80 max-w-sm mx-auto shadow-md   z-50 ">
      <div className="flex justify-between items-center px-4 py-2 bg-red-100">
        <p className="text-sm font-semibold text-red-500">
          Buttons are disabled in demo mode.
        </p>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
      <div className="w-full bg-gray-200 h-1 ">
        <div
          className="bg-red-500 h-1 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
export default Modal;
