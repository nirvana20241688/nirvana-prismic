import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureBox`.
 */
export type FeatureBoxProps = SliceComponentProps<Content.FeatureBoxSlice>;

/**
 * Component for "FeatureBox" Slices.
 */
const FeatureBox = ({ slice }: FeatureBoxProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_box (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeatureBox;
