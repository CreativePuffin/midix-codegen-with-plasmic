// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.9 11.7c-.1-.4-.5-.7-.9-.7H20.7L17 1.6c-.2-.4-.6-.6-1-.6s-.8.2-.9.6L11.3 11H1c-.4 0-.8.3-.9.7-.1.4 0 .9.3 1.1l8.4 6.6-3.7 10.3c-.1.4 0 .9.3 1.1.3.3.8.3 1.2 0l9.4-6.2 9.4 6.2c.2.1.4.2.6.2.2 0 .4-.1.6-.2.3-.3.5-.7.3-1.1l-3.8-10.3 8.4-6.6c.5-.3.6-.7.4-1.1zM16 21c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
        }
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
