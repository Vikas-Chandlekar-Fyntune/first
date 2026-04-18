import { useFeatureFlagControls } from "./features/featureFlags/useFeatureFlagControls";
import { useFeatureFlags } from "./features/featureFlags/useFeatureFlags";

const One = () => {
  const { newUI, newCheckout, betaDashboard } = useFeatureFlags();
  const { setRuntimeFlags } = useFeatureFlagControls();

  // Helper to render status badges
  const StatusBadge = ({ enabled }: { enabled: boolean }) => (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${
        enabled ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      {enabled ? "Active" : "Inactive"}
    </span>
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-slate-200 rounded-xl shadow-sm font-sans">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-slate-800">
          Feature Configuration
        </h1>
        <p className="text-sm text-slate-500">
          Manage your application runtime flags
        </p>
      </header>

      <div className="space-y-4">
        {/* Feature: New UI */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
          <div>
            <p className="font-semibold text-slate-700">Interface Version</p>
            <p className="text-xs text-slate-500">
              {newUI ? "Modern Theme" : "Legacy Theme"}
            </p>
          </div>
          <StatusBadge enabled={newUI} />
        </div>

        {/* Feature: Checkout */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-lg">🛒</span>
            <p className="font-semibold text-slate-700">Express Checkout</p>
          </div>
          <StatusBadge enabled={newCheckout} />
        </div>

        {/* Control Section: Beta Dashboard */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg text-blue-500">📊</span>
              <div>
                <p className="font-semibold text-slate-700">Beta Dashboard</p>
                <p className="text-xs text-slate-400">
                  Toggle experimental analytics
                </p>
              </div>
            </div>

            <button
              onClick={() => setRuntimeFlags({ betaDashboard: !betaDashboard })}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md border ${
                betaDashboard
                  ? "bg-white border-red-200 text-red-600 hover:bg-red-50"
                  : "bg-blue-600 border-transparent text-white hover:bg-blue-700"
              }`}
            >
              {betaDashboard ? "Disable" : "Enable"}
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          System Environment: Production
        </p>
      </footer>
    </div>
  );
};

export default One;
