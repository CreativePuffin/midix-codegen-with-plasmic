// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 25.009 21"}
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
        data-name={"Sofa Chair"}
        d={
          "M25.009 10.5a3.5 3.5 0 00-3.5-3.5 3.43 3.43 0 00-.5.05V2.49a2.58 2.58 0 00-2.6-2.49h-12a2.42 2.42 0 00-2.4 2.49v4.56a3.45 3.45 0 00-.5-.05 3.49 3.49 0 00-1.5 6.65v2.85a2.44 2.44 0 002 2.5v2h1v-2h15v2h1v-2.08a2.56 2.56 0 002-2.42v-2.86a3.49 3.49 0 002-3.14zm-20-8a1.42 1.42 0 011.4-1.5h12a1.59 1.59 0 011.6 1.49v4.86a3.5 3.5 0 00-2 3.15V13h-11v-2.5a3.5 3.5 0 00-2-3.15zM21.489 13h-.48v1h.48a3.49 3.49 0 00.52-.05v2.55a1.59 1.59 0 01-1.6 1.5h-16a1.42 1.42 0 01-1.4-1.5v-2.55a3.45 3.45 0 00.5.05h.5v-1h-.5a2.5 2.5 0 112.5-2.5v3a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3a2.5 2.5 0 112.48 2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
