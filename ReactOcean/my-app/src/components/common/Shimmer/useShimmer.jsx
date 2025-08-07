import { useState, useEffect } from 'react';

function useShimmer(trigger, duration = 2000) {
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    let timer;
    if (trigger) {
      setShowShimmer(true);
      timer = setTimeout(() => {
        setShowShimmer(false);
      }, duration);
    } else {
      setShowShimmer(false);
    }

    return () => clearTimeout(timer);
  }, [trigger, duration]);

  return showShimmer;
}

export default useShimmer;
