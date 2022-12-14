// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20.953 20.953"}
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
        data-name={"Icon ionic-md-close"}
        d={
          "M20.954 2.096l-2.1-2.1-8.377 8.381L2.096 0l-2.1 2.1 8.381 8.377L0 18.858l2.1 2.1 8.377-8.381 8.381 8.381 2.1-2.1-8.381-8.381z"
        }
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
