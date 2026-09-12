import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Envelope } from "@/components/invite/Envelope";
import { Invitation } from "@/components/invite/Invitation";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [open, setOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  const openInvite = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpen(true);
      setFading(true);
      setGone(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeAt = reduce ? 20 : 950;
    const goneAt = reduce ? 40 : 1700;
    const a = window.setTimeout(() => setFading(true), fadeAt);
    const b = window.setTimeout(() => setGone(true), goneAt);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [open]);

  return (
    <main className="invite-stage">
      <div className={`invite-phone${gone ? "" : " envelope-lock"}`}>
        {!gone && <Envelope open={open} fading={fading} onOpen={openInvite} />}
        <Invitation />
      </div>
    </main>
  );
}
