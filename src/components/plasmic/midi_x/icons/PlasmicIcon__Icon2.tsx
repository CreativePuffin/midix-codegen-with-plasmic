// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 40.5 27"}
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
        data-name={"Icon awesome-ticket-alt"}
        d={
          "M9 6.75h22.5v13.5H9zm28.125 6.75a3.375 3.375 0 003.375 3.375v6.75A3.375 3.375 0 0137.125 27H3.375A3.375 3.375 0 010 23.625v-6.75a3.375 3.375 0 000-6.75v-6.75A3.375 3.375 0 013.375 0h33.75A3.375 3.375 0 0140.5 3.375v6.75a3.375 3.375 0 00-3.375 3.375zM33.75 6.188A1.687 1.687 0 0032.063 4.5H8.438A1.687 1.687 0 006.75 6.188v14.625A1.687 1.687 0 008.438 22.5h23.625a1.687 1.687 0 001.688-1.687z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
