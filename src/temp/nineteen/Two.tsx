import { UserPermissions } from './UserPermissions';
import { Notifications } from './Notifications';
import { useCheckboxDeltaTracker } from './useCheckboxDeltaTracker';

export default function App() {
  const modifiedCount = useCheckboxDeltaTracker(true);

  return (
    <div
      style={{
        fontFamily: 'system-ui, Arial',
        background: '#f6f8fb',
        minHeight: '100vh',
        padding: '24px',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Settings</h2>

        {/* Badge */}
        <div
          style={{
            background: modifiedCount ? '#ffeaea' : '#eaf7ee',
            color: modifiedCount ? '#d92d20' : '#1a7f37',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500',
            border: '1px solid',
            borderColor: modifiedCount ? '#f5c2c0' : '#b7ebc6',
          }}
        >
          {modifiedCount === 0
            ? 'No changes'
            : `${modifiedCount} change${modifiedCount > 1 ? 's' : ''}`}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'grid',
          gap: '16px',
        }}
      >
        <UserPermissions />
        <Notifications />
      </div>
    </div>
  );
}
