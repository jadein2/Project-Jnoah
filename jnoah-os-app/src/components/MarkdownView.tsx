import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownView({ content }: { content: string }) {
  return (
    <article className="prose prose-sm max-w-none prose-headings:rf-serif prose-headings:text-[var(--rf-charcoal)] prose-headings:font-semibold prose-p:text-[var(--rf-charcoal)] prose-p:leading-relaxed prose-li:text-[var(--rf-charcoal)] prose-strong:text-[var(--rf-charcoal)] prose-a:text-[var(--rf-orange)] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-[var(--rf-cream2)] prose-th:font-semibold prose-td:border-[var(--rf-border)]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
