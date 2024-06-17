// utils/markdownProcessor.ts
import { unified } from "unified";
import parse from "remark-parse";
import rehype from "remark-rehype";
import html from "rehype-stringify";
import raw from "rehype-raw";
import { visit } from "unist-util-visit";
import { Node } from "unist";

const addClasses = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "h1") {
        node.properties.className = ["text-4xl", "font-bold"];
      }
      if (node.tagName === "h2") {
        node.properties.className = ["text-3xl", "font-bold"];
      }
      if (node.tagName === "h3") {
        node.properties.className = ["text-2xl", "font-bold"];
      }
    });
  };
};

export const parseMarkdown = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(parse)
    .use(rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(addClasses)
    .use(html)
    .process(markdown);
  return result.toString();
};
