// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 21 21"}
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
        data-name={"Icon material-close"}
        d={
          "M21 2.115L18.885 0 10.5 8.385 2.115 0 0 2.115 8.385 10.5 0 18.885 2.115 21l8.385-8.385L18.885 21 21 18.885 12.615 10.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
