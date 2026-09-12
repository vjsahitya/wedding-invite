import { couple } from "@/data/wedding";

type EnvelopeProps = {
  open: boolean;
  fading: boolean;
  onOpen: () => void;
};

export function Envelope({ open, fading, onOpen }: EnvelopeProps) {
  const cls = [
    "envelope-intro",
    open ? "is-open" : "",
    fading ? "is-gone" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cls}
      role="dialog"
      aria-label="Wedding invitation envelope"
      aria-hidden={open}
    >
      <div className="envelope-sheet">
        <div className="envelope-flap" aria-hidden="true" />
        <button
          type="button"
          className="envelope-seal"
          onClick={onOpen}
          aria-label="Open the invitation"
        >
          <img src="/images/wax-seal.jpg" alt="" />
          <span className="monogram">
            {couple.one[0]}
            <span style={{ fontSize: "0.72em", padding: "0 0.04em" }}>&</span>
            {couple.two[0]}
          </span>
        </button>
        <div className="envelope-copy">
          <p className="envelope-invite">You are invited</p>
          <button type="button" className="envelope-hint" onClick={onOpen}>
            Tap the seal
          </button>
        </div>
        <button type="button" className="envelope-skip" onClick={onOpen}>
          Open invitation
        </button>
      </div>
    </div>
  );
}
