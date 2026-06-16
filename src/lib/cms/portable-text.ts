type PortableTextSpan = {
  text?: string;
};

type PortableTextBlock = {
  _type?: string;
  children?: PortableTextSpan[];
};

export function portableTextToPlainText(blocks?: PortableTextBlock[] | null) {
  if (!blocks?.length) {
    return "";
  }

  return blocks
    .filter((block) => block?._type === "block" && Array.isArray(block.children))
    .map((block) => block.children?.map((child) => child.text || "").join("").trim())
    .filter(Boolean)
    .join("\n\n");
}
