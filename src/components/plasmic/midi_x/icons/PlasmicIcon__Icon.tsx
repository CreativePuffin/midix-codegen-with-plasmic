// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 21 30"}
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
        data-name={"Icon material-location-on"}
        d={
          "M10.5 0A10.492 10.492 0 000 10.5C0 18.375 10.5 30 10.5 30S21 18.375 21 10.5A10.492 10.492 0 0010.5 0zm0 14.25a3.75 3.75 0 113.75-3.75 3.751 3.751 0 01-3.75 3.75z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
