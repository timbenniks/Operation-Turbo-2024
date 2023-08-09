import type { Component } from 'vue'
import NoBlock from "../components/Blocks/NoBlock.vue";

import RichTextBlock from "../components/Blocks/RichTextBlock.vue";
import SingleImageBlock from "../components/Blocks/SingleImageBlock.vue";
import TwoColumnBlock from "../components/Blocks/TwoColumnBlock.vue";

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {
  RichText: RichTextBlock,
  SingleImage: SingleImageBlock,
  TwoColumn: TwoColumnBlock
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoBlock
}