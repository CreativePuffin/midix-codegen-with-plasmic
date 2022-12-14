// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 445 237.183"}
      xmlSpace={"preserve"}
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
        d={
          "M69.835 50.725c-.168-.011-.335-.026-.506-.026H64.22l-9.33 15.537-3.033-9.105 3.527-6.432H44.637l3.53 6.432-3.036 9.105L35.8 50.7h-5.105c-.155 0-.308.014-.46.024-1.815.036-4.766.44-8.12 2.132-5.379 2.665-11.178 8.501-15.236 18.84C2.772 82.073.014 97.081 0 119.738c.002 5.856.189 12.225.596 19.159.248 4.251 3.777 7.531 7.981 7.532a8.003 8.003 0 007.992-8.47c-.391-6.648-.568-12.706-.568-18.22-.035-24.216 3.496-37.819 6.964-44.918V224.82c0 6.83 5.537 12.363 12.364 12.363 6.828 0 12.365-5.533 12.365-12.363v-90.272h4.635v90.272c0 6.83 5.537 12.363 12.363 12.363 6.828 0 12.365-5.533 12.365-12.363V74.866a43.345 43.345 0 011.778 4.235c2.819 7.812 5.19 20.631 5.181 40.638 0 5.516-.176 11.573-.563 18.224a8 8 0 007.994 8.467 8.004 8.004 0 007.98-7.536c.402-6.932.588-13.3.59-19.155-.04-30.182-4.861-46.886-11.435-56.93-3.283-4.985-7.127-8.183-10.68-9.954-3.322-1.678-6.252-2.09-8.067-2.13zM50.01 74.797a3.5 3.5 0 110 7 3.5 3.5 0 110-7zm0 17.916a3.5 3.5 0 110 7 3.5 3.5 0 110-7zm0 24.915a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        }
      ></path>

      <circle cx={"50.01"} cy={"22.5"} r={"22.5"}></circle>

      <path
        d={
          "M435.957 146.416a8.001 8.001 0 008.452-7.521c.403-6.934.588-13.3.59-19.155-.04-30.181-4.86-46.885-11.434-56.93-3.285-4.987-7.128-8.184-10.68-9.956-3.327-1.677-6.258-2.09-8.073-2.13-.166-.01-.332-.025-.501-.025h-5.107l-9.332 15.537-3.034-9.105 3.528-6.432H389.62l3.529 6.432-3.035 9.105-9.332-15.537h-5.106c-.163 0-.323.015-.483.025-1.817.037-4.757.446-8.097 2.13-5.38 2.668-11.179 8.503-15.236 18.84-4.107 10.38-6.865 25.387-6.88 48.046 0 5.857.19 12.223.598 19.158a8 8 0 008.456 7.517 8 8 0 007.517-8.454c-.392-6.652-.57-12.707-.568-18.22-.035-24.22 3.495-37.824 6.965-44.924V224.82c0 6.83 5.537 12.363 12.363 12.363 6.828 0 12.365-5.533 12.365-12.363v-90.272h4.635v90.272c0 6.83 5.537 12.363 12.363 12.363 6.828 0 12.365-5.533 12.365-12.363V74.867a43.345 43.345 0 011.779 4.235c2.82 7.812 5.19 20.629 5.18 40.638.001 5.514-.176 11.573-.564 18.224a8 8 0 007.522 8.452zm-40.964-71.62a3.5 3.5 0 110 7 3.5 3.5 0 110-7zm0 17.917a3.5 3.5 0 110 7 3.5 3.5 0 110-7zm0 24.915a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm-22.5-95.128c0 .162.008.321.011.482C372.762 35.188 382.73 45 394.993 45c12.427 0 22.5-10.072 22.5-22.5 0-6.674-2.908-12.666-7.524-16.787A22.41 22.41 0 00394.993 0c-12.426 0-22.5 10.074-22.5 22.5zm-229.27 99.068c15.97 10.777 45.393 17.571 79.28 17.637 24.833-.007 47.319-3.753 63.809-9.922 6.008-2.254 11.214-4.827 15.477-7.71a11.375 11.375 0 01-3.127-3.899c-14.496 9.614-43.257 16.596-76.159 16.53-24.319.007-46.335-3.71-62.056-9.604-5.56-2.079-10.305-4.438-14.091-6.948a11.37 11.37 0 01-3.133 3.916zm11.281 104.471h-5.334v-5.666h-8v-97.508c-1.51.744-3.203 1.174-5 1.174s-3.49-.43-5-1.174v97.508h-8v5.666h-5.334v7.334h36.668v-7.334zM136.17 120.372c5.634 0 10.295-4.115 11.173-9.5a11.46 11.46 0 00.161-1.834c0-6.26-5.074-11.333-11.334-11.333s-11.334 5.074-11.334 11.333c0 .626.065 1.235.161 1.834.879 5.385 5.54 9.5 11.173 9.5zm167.666 2.493v97.508h-8v5.666h-5.334v7.334h36.668v-7.334h-5.334v-5.666h-8v-97.508c-1.51.744-3.203 1.174-5 1.174s-3.49-.43-5-1.174zm5-2.493c5.634 0 10.295-4.115 11.173-9.5.097-.599.161-1.208.161-1.834 0-6.26-5.074-11.333-11.334-11.333s-11.334 5.074-11.334 11.333c0 .626.065 1.235.162 1.834.877 5.385 5.539 9.5 11.172 9.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
