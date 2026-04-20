export function GridOverlay() {
  return (
    <div
      className="grid-overlay pointer-events-none fixed inset-0 z-99999 mix-blend-difference"
      aria-hidden="true"
    >
      <div className="layout-grid absolute inset-0">
        {columns.map((col) => (
          <div
            key={col}
            className="border-border/5 text-border/30 flex items-end border-l pb-2 text-xs last:border-r"
          >
            <span className="layout-grid-item hidden lg:inline">{col}</span>
          </div>
        ))}
      </div>

      <div className="grid-overlay__crosshair">
        <div className="grid-overlay__crosshair-dot"></div>
      </div>
    </div>
  );
}

const columns = ["2.76:1", "2.39:1", "2:1", "1.66:1", "1.19:1", "1.33:1", "1:1"];
