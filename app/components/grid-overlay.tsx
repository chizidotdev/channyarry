export function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-99999 mix-blend-difference"
      aria-hidden="true"
    >
      <div className="layout-grid absolute inset-0">
        {columns.map((col) => (
          <div
            key={col}
            className="layout-grid-item text-background/30 border-background/5 flex items-end border-l pb-4 text-xs last:border-r"
          >
            <span className="hidden lg:inline">{col}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const columns = ["2.76:1", "2.39:1", "2:1", "1.66:1", "1.19:1", "1.33:1", "1:1"];
