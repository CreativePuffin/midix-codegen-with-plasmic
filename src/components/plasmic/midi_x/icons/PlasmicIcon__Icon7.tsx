// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32.835 32.895"}
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
        data-name={"Icon feather-phone"}
        d={
          "M31.333 23.88v4.5a3 3 0 01-3.27 3 29.685 29.685 0 01-12.945-4.6 29.25 29.25 0 01-9-9A29.685 29.685 0 011.513 4.77 3 3 0 014.498 1.5h4.5a3 3 0 013 2.58 19.26 19.26 0 001.05 4.22 3 3 0 01-.675 3.165l-1.905 1.9a24 24 0 009 9l1.9-1.905a3 3 0 013.165-.675 19.26 19.26 0 004.215 1.05 3 3 0 012.585 3.045z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
