// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31 2H1v7.7c1 .2 2 .3 3 .3 5.1 0 9.6-2.2 12-5.4 2.4 3.2 6.9 5.4 12 5.4 1 0 2-.1 3-.3V2z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M12 8.7v1.7C12 15 9.2 19.2 5 21h0c1.9 2.6 3 4.8 3 8v1H1V9m0 12h4M31 9v21h-7v-1c0-3.2 1.1-5.4 3-8h0c-4.2-1.8-7-6-7-10.6V8.7M31 21h-4"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M4 16h0c1.2-1.8 1.9-3.9 2-6.1M28 16h0c-1.2-1.8-1.9-3.9-2-6.1"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
