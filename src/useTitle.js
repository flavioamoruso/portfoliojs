import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Flavio Amoruso - ${title}`;
  }, [title]);
};

export default useTitle;
