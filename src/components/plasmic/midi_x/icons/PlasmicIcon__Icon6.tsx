// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30.621 30.621"}
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
        data-name={"Icon feather-search"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
      >
        <path
          data-name={"Path 28"}
          d={"M25.5 13.5a12 12 0 11-12-12 12 12 0 0112 12z"}
        ></path>

        <path data-name={"Path 29"} d={"M28.5 28.5l-6.525-6.525"}></path>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
