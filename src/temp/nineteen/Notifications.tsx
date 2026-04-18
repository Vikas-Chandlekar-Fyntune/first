export function Notifications() {
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
      <h4 style={{ marginBottom: '12px' }}>Notifications</h4>

      <label style={rowStyle}>
        <input className="tracked-checkbox" data-id="email" type="checkbox" />
        <span>Email Alerts</span>
      </label>

      <label style={rowStyle}>
        <input className="tracked-checkbox" data-id="sms" type="checkbox" />
        <span>SMS Alerts</span>
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
