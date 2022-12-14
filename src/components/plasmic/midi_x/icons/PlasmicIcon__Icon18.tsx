// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 31.518 31.511"}
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
        data-name={"Icon awesome-instagram"}
        d={
          "M15.762 7.676a8.079 8.079 0 108.079 8.079 8.066 8.066 0 00-8.079-8.079zm0 13.331a5.252 5.252 0 115.252-5.252 5.262 5.262 0 01-5.252 5.252zM26.056 7.346a1.884 1.884 0 11-1.885-1.884 1.88 1.88 0 011.885 1.884zm5.349 1.916a9.325 9.325 0 00-2.545-6.6 9.387 9.387 0 00-6.6-2.545c-2.6-.148-10.4-.148-13 0a9.373 9.373 0 00-6.6 2.538 9.356 9.356 0 00-2.545 6.6c-.148 2.6-.148 10.4 0 13a9.325 9.325 0 002.545 6.6 9.4 9.4 0 006.6 2.545c2.6.148 10.4.148 13 0a9.325 9.325 0 006.6-2.545 9.387 9.387 0 002.545-6.6c.148-2.6.148-10.392 0-12.994zm-3.359 15.781a5.318 5.318 0 01-3 3c-2.074.823-7 .633-9.288.633s-7.221.183-9.288-.633a5.318 5.318 0 01-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318 5.318 0 013-3c2.074-.823 7-.633 9.288-.633s7.221-.183 9.288.633a5.318 5.318 0 013 3c.823 2.074.633 7 .633 9.288s.189 7.221-.633 9.288z"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
