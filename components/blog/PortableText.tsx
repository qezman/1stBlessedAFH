import { Fragment, type ReactNode } from "react";
import type { PortableBlock, PortableSpan } from "@/sanity/lib/queries";

function renderInline(node: PortableSpan, markDefs: PortableBlock["markDefs"]) {
  const marks = node.marks || [];
  const text = node.text || "";
  const linkMark = markDefs?.find((m) => marks.includes(m._key));

  if (linkMark) {
    return (
      <a
        key={node._key}
        href={linkMark.href}
        target={linkMark.href?.startsWith("http") ? "_blank" : undefined}
        rel={
          linkMark.href?.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="text-[#1A3358] underline underline-offset-4 hover:text-[#C9992E] transition-colors"
      >
        {text}
      </a>
    );
  }

  const strong = marks.includes("strong");
  const em = marks.includes("em");

  let el: ReactNode = text;
  if (em) el = <em key={node._key}>{el}</em>;
  if (strong) el = <strong key={node._key}>{el}</strong>;

  return <Fragment key={node._key}>{el}</Fragment>;
}

function renderPortableBlock(block: PortableBlock, i: number) {
  const style = block.style || "normal";

  if (style === "h2")
    return (
      <h2
        key={block._key || i}
        id={`section-${i}`}
        className="font-sans text-2xl font-medium text-[#0B1628] tracking-[-0.015em] leading-[1.35] mt-11 mb-5 scroll-mt-[110px]"
      >
        {block.children?.map((c) => renderInline(c, block.markDefs))}
      </h2>
    );

  if (style === "h3")
    return (
      <h3
        key={block._key || i}
        className="font-sans text-xl font-medium text-[#0B1628] tracking-[-0.01em] leading-[1.4] mt-9 mb-4"
      >
        {block.children?.map((c) => renderInline(c, block.markDefs))}
      </h3>
    );

  if (style === "blockquote")
    return (
      <blockquote
        key={block._key || i}
        className="border-l-[3px] border-[#C9992E] bg-[#FDF8EE] rounded-r px-6 py-5 my-9 text-lg font-light text-[#0B1628] leading-[1.65] italic"
      >
        {block.children?.map((c) => renderInline(c, block.markDefs))}
      </blockquote>
    );

  if (block.listItem === "bullet")
    return (
      <li
        key={block._key || i}
        className="text-[17px] font-light text-gray-700 leading-[1.85] mb-2.5 pl-1"
      >
        {block.children?.map((c) => renderInline(c, block.markDefs))}
      </li>
    );

  return (
    <p
      key={block._key || i}
      className="text-[17px] font-light text-gray-700 leading-[1.85] mb-6"
    >
      {block.children?.map((c) => renderInline(c, block.markDefs))}
    </p>
  );
}

export function PortableTextBody({ blocks }: { blocks: PortableBlock[] }) {
  const rendered: React.ReactNode[] = [];
  let listItems: PortableBlock[] = [];

  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    rendered.push(
      <ul
        key={key}
        className="mb-6 pl-6 flex flex-col gap-2 marker:text-[#1A3358]"
      >
        {listItems.map((b, i) => renderPortableBlock(b, i))}
      </ul>,
    );
    listItems = [];
  };

  blocks.forEach((block, i) => {
    if (block.listItem) {
      listItems.push(block);
      return;
    }
    flushList(`list-${i}`);
    rendered.push(renderPortableBlock(block, i));
  });
  flushList(`list-end`);

  return <>{rendered}</>;
}

export function getHeadings(
  blocks: PortableBlock[],
): { text: string; index: number }[] {
  return blocks
    .map((b, i) => ({ b, i }))
    .filter(({ b }) => b.style === "h2")
    .map(({ b, i }) => ({
      index: i,
      text: b.children?.map((c) => c.text || "").join("") || "",
    }));
}
