import { ReactLenis } from "lenis/react";

export default function LenisWrapper({
  children,
  end,
}: {
  children: React.ReactNode;
  end: boolean;
}) {
  if (end) {
    return <ReactLenis root>{children}</ReactLenis>;
  } else {
    return <div>{children}</div>;
  }
}
