// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 34.875 34.873"}
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
        data-name={"Icon awesome-facebook-messenger"}
        d={
          "M17.476 0C7.63 0 0 7.195 0 16.915a16.531 16.531 0 005.489 12.511c.587.528.466.834.566 4.094a1.4 1.4 0 001.96 1.235c3.72-1.638 3.768-1.768 4.4-1.6 10.778 2.966 22.461-3.931 22.461-16.245C34.875 7.195 27.322 0 17.476 0zm10.493 13.016l-5.132 8.126a2.628 2.628 0 01-3.791.7l-4.084-3.056a1.055 1.055 0 00-1.266 0l-5.51 4.179a.829.829 0 01-1.2-1.1l5.13-8.128a2.627 2.627 0 013.791-.7l4.082 3.056a1.055 1.055 0 001.266 0l5.513-4.175a.827.827 0 011.2 1.1z"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
