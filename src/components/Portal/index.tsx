import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "../types";

export const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`flex bg-black/50 fixed inset-0 overflow-auto w-full h-full z-2 ${props.className}`}
          onClick={props.backdropDismiss}
        >
          {props.children}
        </div>,
        ref.current
      )
    : null;
};
