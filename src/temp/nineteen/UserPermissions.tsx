import { useEffect } from 'react';

export function UserPermissions() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('[data-id="read"]').checked = true;
      document.querySelector('[data-id="write"]').checked = true;
    }, 200);
  }, []);

  return (
    <div
      style={{
        background: '#fff',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <h4 style={{ marginBottom: '12px' }}>Permissions</h4>

      <label style={rowStyle}>
        <input className="tracked-checkbox" data-id="read" type="checkbox" />
        <span>Read Access</span>
      </label>

      <label style={rowStyle}>
        <input className="tracked-checkbox" data-id="write" type="checkbox" />
        <span>Write Access</span>
      </label>
    </div>
  );
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '8px 0',
  cursor: 'pointer',
};
