// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30 30"}
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

      <g
        data-name={"Icon feather-music"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
      >
        <path data-name={"Path 23"} d={"M10.5 24V4.5l18-3V21"}></path>

        <path
          data-name={"Path 24"}
          d={"M10.5 24A4.5 4.5 0 116 19.5a4.5 4.5 0 014.5 4.5z"}
        ></path>

        <path
          data-name={"Path 25"}
          d={"M28.5 21a4.5 4.5 0 11-4.5-4.5 4.5 4.5 0 014.5 4.5z"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
