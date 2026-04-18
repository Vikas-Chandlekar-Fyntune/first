import { useEffect, useRef, useState } from 'react';

export function useCheckboxDeltaTracker(val1, className = 'tracked-checkbox') {
  const initialRef = useRef(null); // baseline
  const currentRef = useRef(new Set()); // live state
  const [modifiedCount, setModifiedCount] = useState(0);

  // helper: get all checked IDs
  const getCheckedIds = () => {
    const nodes = document.querySelectorAll(`.${className}`);
    const set = new Set();

    nodes.forEach((node) => {
      if (node.checked) {
        const id = node.getAttribute('data-id');
        if (id) set.add(id);
      }
    });

    return set;
  };

  // capture initial state (important for async prefill)
  useEffect(() => {
    if (!val1) return;

    const timer = setTimeout(() => {
      const initial = getCheckedIds();
      initialRef.current = initial;
      currentRef.current = new Set(initial);
      setModifiedCount(0);
    }, 300); // wait for async prefill

    return () => clearTimeout(timer);
  }, [val1]);

  // listen for user interaction
  useEffect(() => {
    if (!val1) return;

    const handler = (e) => {
      const target = e.target;

      if (!target.classList.contains(className)) return;

      const id = target.getAttribute('data-id');
      if (!id) return;

      if (target.checked) {
        currentRef.current.add(id);
      } else {
        currentRef.current.delete(id);
      }

      // compare with initial
      const initial = initialRef.current || new Set();
      const current = currentRef.current;

      let count = 0;

      // items added
      current.forEach((id) => {
        if (!initial.has(id)) count++;
      });

      // items removed
      initial.forEach((id) => {
        if (!current.has(id)) count++;
      });

      setModifiedCount(count);
    };

    document.addEventListener('change', handler);

    return () => {
      document.removeEventListener('change', handler);
    };
  }, [val1, className]);

  return modifiedCount;
}
