// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kJshciSJnYYFfXZkFQ39on
// Component: SzZbMNAxr_
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_midi_x.module.css"; // plasmic-import: kJshciSJnYYFfXZkFQ39on/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: SzZbMNAxr_/css

import siteLogoFileSmallpngEUPtycSg from "./images/siteLogoFileSmallpng.png"; // plasmic-import: eU-ptycSg/picture
import siteLogoFileSmallBlackpngUJKtjJmn from "./images/siteLogoFileSmallBlackpng.png"; // plasmic-import: uJKtjJMN-/picture

export type PlasmicLogo__VariantMembers = {
  onWhite: "onWhite";
};
export type PlasmicLogo__VariantsArgs = {
  onWhite?: SingleBooleanChoiceArg<"onWhite">;
};
type VariantPropType = keyof PlasmicLogo__VariantsArgs;
export const PlasmicLogo__VariantProps = new Array<VariantPropType>("onWhite");

export type PlasmicLogo__ArgsType = {};
type ArgPropType = keyof PlasmicLogo__ArgsType;
export const PlasmicLogo__ArgProps = new Array<ArgPropType>();

export type PlasmicLogo__OverridesType = {
  wrapper?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLogoProps {
  onWhite?: SingleBooleanChoiceArg<"onWhite">;
  className?: string;
}

function PlasmicLogo__RenderFunc(props: {
  variants: PlasmicLogo__VariantsArgs;
  args: PlasmicLogo__ArgsType;
  overrides: PlasmicLogo__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "onWhite",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.onWhite
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"wrapper"}
      data-plasmic-override={overrides.wrapper}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.wrapper
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgonWhite]: hasVariant($state, "onWhite", "onWhite")
        })}
        displayHeight={"100%" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"auto" as const}
        loading={"lazy" as const}
        src={
          hasVariant($state, "onWhite", "onWhite")
            ? {
                src: siteLogoFileSmallBlackpngUJKtjJmn,
                fullWidth: 1840,
                fullHeight: 524,
                aspectRatio: undefined
              }
            : {
                src: siteLogoFileSmallpngEUPtycSg,
                fullWidth: 1840,
                fullHeight: 524,
                aspectRatio: undefined
              }
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  wrapper: ["wrapper", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  wrapper: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogo__VariantsArgs;
    args?: PlasmicLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "wrapper") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("wrapper"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
