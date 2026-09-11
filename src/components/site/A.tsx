import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Link for data-driven paths: internal paths use the router, everything else a plain <a>. */
export function A({ href, children, ...rest }: Props) {
  if (/^(https?:|tel:|sms:|mailto:|#)/.test(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href as "/"} {...(rest as object)}>
      {children}
    </Link>
  );
}
