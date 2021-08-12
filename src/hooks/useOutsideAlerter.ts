import { useEffect } from "react";

type useOutsideAlerterProps = {
  ref: React.RefObject<HTMLInputElement>;
  onEvent: () => void;
};

const useOutsideAlerter = ({ ref, onEvent }: useOutsideAlerterProps) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onEvent();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
