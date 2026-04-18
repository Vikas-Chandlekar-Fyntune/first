import { useEffect } from 'react';

export default function FeatureA() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('[data-id="a"]').checked = true;
      document.querySelector('[data-id="b"]').checked = true;
    }, 200);
  }, []);

  return (
    <div>
      <input type="checkbox" className="tracked-checkbox" data-id="a" />
      <input type="checkbox" className="tracked-checkbox" data-id="b" />
    </div>
  );
}
