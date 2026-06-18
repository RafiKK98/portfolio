import clsx from "clsx";
import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"section">;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <section
      className={clsx("mx-auto px-6 w-full max-w-4xl", className)}
      {...props}
    >
      {children}
    </section>
  );
}
