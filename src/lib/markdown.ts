import { marked } from 'marked';

export function renderMarkdown(markdown: string): string|Promise<string> {
  const markdown_output = marked(markdown);
  return markdown_output;
}
