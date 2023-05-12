"use client";

import { useRouter } from "next/navigation";

/**
 * @property children
 * @property url
 * @property className?
 */
type RedirectButtonProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

/**
 * Redirect to `redirectUrl`
 *
 * @see {@link RedirectButtonProps}
 */
export const RedirectButton = ({
  children,
  url,
  className,
  ...rest
}: RedirectButtonProps) => {
  const router = useRouter();

  return (
    <button className={className} onClick={() => router.push(url)} {...rest}>
      {children}
    </button>
  );
};
