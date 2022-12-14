// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 27 30"}
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
        data-name={"Icon feather-user"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
      >
        <path
          data-name={"Path 26"}
          d={"M25.5 28.5v-3a6 6 0 00-6-6h-12a6 6 0 00-6 6v3"}
        ></path>

        <path
          data-name={"Path 27"}
          d={"M19.5 7.5a6 6 0 11-6-6 6 6 0 016 6z"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
