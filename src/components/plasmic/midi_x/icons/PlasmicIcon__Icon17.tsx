// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 19.281 36"}
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
        data-name={"Icon awesome-facebook-f"}
        d={
          "M18.018 20.25l1-6.515h-6.252V9.507c0-1.782.873-3.52 3.673-3.52h2.842V.44A34.658 34.658 0 0014.237 0C9.091 0 5.723 3.12 5.723 8.769v4.965H0v6.516h5.723V36h7.043V20.25z"
        }
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
