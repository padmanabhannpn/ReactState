import { useState, useCallback } from 'react';

function useToggle(initialValue = true) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}

export default useToggle;