// App.js
import { useState } from 'react';
import { Notifications } from './Notifications';
import { useCheckboxDeltaTracker1 } from './useCheckboxDeltaTracker1';
import { UserPermissions1 } from './UserPermissions1';
import { Notifications1 } from './Notifications1';

export default function App() {
  const [resetKey, setResetKey] = useState(0);

  const { modifiedCount, resetChanges } = useCheckboxDeltaTracker1(
    true,
    'tracked-checkbox',
    resetKey,
  );

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Settings</h2>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Reset Button */}
          <button
            onClick={() => {
              // resetChanges();
              setResetKey(resetKey + 1);
            }}
            style={buttonStyle}
          >
            Reset
          </button>

          {/* Badge */}
          <div
            style={{
              background: modifiedCount ? '#ffeaea' : '#eaf7ee',
              color: modifiedCount ? '#d92d20' : '#1a7f37',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              border: '1px solid',
              borderColor: modifiedCount ? '#f5c2c0' : '#b7ebc6',
            }}
          >
            {modifiedCount === 0
              ? 'No changes'
              : `${modifiedCount} change${modifiedCount > 1 ? 's' : ''}`}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        <UserPermissions1 resetKey={resetKey} />
        <Notifications1 resetKey={resetKey} />
      </div>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'system-ui, Arial',
  background: '#f6f8fb',
  minHeight: '100vh',
  padding: '24px',
};

const headerStyle = {
  maxWidth: '800px',
  margin: '0 auto 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'grid',
  gap: '16px',
};

const buttonStyle = {
  padding: '6px 12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  background: '#fff',
  cursor: 'pointer',
};
