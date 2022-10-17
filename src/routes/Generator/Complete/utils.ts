import { MutableRefObject } from "react";

export const copyToClipboard = (ref: MutableRefObject<HTMLElement | null>) => {
  if (ref.current) {
    navigator.clipboard.writeText(ref.current.innerText);
    alert("Copied!");
  }
};
