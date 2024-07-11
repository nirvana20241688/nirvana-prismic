import { type Content, isFilled } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { PrismicRichText } from "@/components/PrismicRichText";

type ImageCardProps = {
  card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
};

const ImageCard = ({ card }: ImageCardProps) => {
  const image = card.image;

  return (
    <li className="grid gap-x-8 mb-5">
      {isFilled.image(image) && (
        <div className="bg-gray-100 mb-2">
          <ConditionalWrap
            condition={isFilled.link(card.buttonLink)}
            wrap={({ children }) => (
              <PrismicNextLink field={card.buttonLink} tabIndex={-1}>
                {children}
              </PrismicNextLink>
            )}
          >
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </ConditionalWrap>
        </div>
      )}
      <div className="leading-relaxed">
        <PrismicRichText field={card.text} />
      </div>
      {isFilled.link(card.buttonLink) && (
        <div className="mt-5">
          <PrismicNextLink field={card.buttonLink} className="font-semibold btn btn-primary">
            {card.buttonText || "More Info"}
          </PrismicNextLink>
        </div>
      )}
    </li>
  );
};

type ImageCardsProps = SliceComponentProps<Content.ImageCardsSlice>;

  const backgroundColor = {
    Grey: 'bg-gray',
    Green: 'bg-greenGray',
  }
const ImageCards = ({ slice }: ImageCardsProps) => {

  
  return (
    <Bounded as="section" className={`bg-gray ${slice.primary.section_background_color ? backgroundColor[slice.primary.section_background_color] : backgroundColor.Grey }`}>
      <div className="grid gap-12">
        {isFilled.richText(slice.primary.heading) && (
          <div className="text-center">
            <PrismicRichText field={slice.primary.heading}/>
          </div>
        )}
        <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {slice.primary.cards.map((card) => (
            <ImageCard key={card.image.url} card={card} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
