import { useEffect, useRef, useState } from "react";

// type TUseIdleParams = number

const useIdle = (timeout: number) => {
  const [idle, setIdle] = useState<boolean>(true);

  return idle;
};

export default useIdle;
