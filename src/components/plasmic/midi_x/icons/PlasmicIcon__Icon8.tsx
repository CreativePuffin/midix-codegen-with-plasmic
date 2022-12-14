// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30 24"}
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
        data-name={"Icon material-mail-outline"}
        d={
          "M27 0H3A3 3 0 00.015 3L0 21a3.009 3.009 0 003 3h24a3.009 3.009 0 003-3V3a3.009 3.009 0 00-3-3zm0 21H3V6l12 7.5L27 6zM15 10.5L3 3h24z"
        }
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
