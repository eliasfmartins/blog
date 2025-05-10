import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
type SafeMarkDownProps = {
  markdown: string
}


export function SafeMarkDown({ markdown }: SafeMarkDownProps) {
  return (
    <div className={clsx('prose prose-slate', 'w-full', 'max-w-full', 'dark:prose-invert', ' prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-a:transition prose-a:no-underline prose-img:mx-auto md:prose-lg')}>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
