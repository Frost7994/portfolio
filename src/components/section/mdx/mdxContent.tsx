// types
import { JSX } from 'react'

// components
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

// utils
import { highlight } from 'sugar-high'

const Code = ({ children, ...props }: any) => {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// custom components
const components = {
  code: Code
}

export const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
