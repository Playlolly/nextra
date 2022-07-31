import React, { PropsWithChildren, ReactNode } from 'react'
import cn from 'classnames'
import Slugger from 'github-slugger'
import { Heading } from 'nextra'
import { useRouter } from 'next/router'
import scrollIntoView from 'scroll-into-view-if-needed'

import renderComponent from './utils/render-component'
import getHeadingText from './utils/get-heading-text'
import { ActiveAnchor, useActiveAnchor } from './misc/active-anchor'
import { useConfig } from './config'

const EditPageLink = ({
  repository,
  text,
  filepath
}: {
  repository?: string
  text:
    | React.ReactNode
    | React.FC<
        PropsWithChildren<{
          locale: string
        }>
      >
  filepath: string
}) => {
  const config = useConfig()
  const url = config.docsRepositoryBase
  const { locale = 'en-US' } = useRouter()
  return (
    <a
      className="mb-2 block text-xs font-medium text-gray-500 no-underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text
        ? renderComponent(text, {
            locale
          })
        : 'Edit this page'}
    </a>
  )
}

const FeedbackLink = ({
  repository,
  feedbackLink,
  filepath,
  labels
}: {
  repository?: string
  feedbackLink: ReactNode | React.FC<PropsWithChildren<{ locale: string }>>
  filepath: string
  labels?: string
}) => {
  const config = useConfig()
  const url = config.docsRepositoryBase
  const { locale = 'en-US' } = useRouter()
  return (
    <a
      className="mb-2 block text-xs font-medium text-gray-500 no-underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {feedbackLink
        ? renderComponent(feedbackLink, {
            locale
          })
        : 'Feedback'}
    </a>
  )
}

const indent = (level: number) => {
  switch (level) {
    case 3:
      return { marginLeft: '1rem ' }
    case 4:
      return { marginLeft: '2rem ' }
    case 5:
      return { marginLeft: '3rem ' }
    case 6:
      return { marginLeft: '4rem ' }
  }
  return {}
}

const emptyHeader: any[] = []

function Item({
  heading,
  slug,
  activeAnchor
}: {
  heading: Heading
  slug: string
  activeAnchor: ActiveAnchor
}) {
  const text = getHeadingText(heading)
  const state = activeAnchor[slug]
  const ref = React.useRef<HTMLLIElement>(null)

  React.useEffect(() => {
    const el = ref.current
    const toc = document.getElementsByClassName('nextra-toc')[0]
    if (state?.isActive && el && toc) {
      scrollIntoView(el, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: toc
      })
    }
  }, [state?.isActive])

  return (
    <li
      className="scroll-my-6 scroll-py-6"
      style={indent(heading.depth)}
      ref={ref}
    >
      <a
        href={`#${slug}`}
        className={cn(
          'inline-block no-underline',
          heading.depth === 2 ? 'font-semibold' : '',
          state?.isActive
            ? 'text-primary-500 subpixel-antialiased'
            : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
        )}
        aria-selected={state?.isActive}
      >
        {text}
      </a>
    </li>
  )
}

export default function ToC({
  headings = emptyHeader,
  filepathWithName
}: {
  headings: Heading[] | null
  filepathWithName: string
}) {
  const slugger = new Slugger()
  const activeAnchor = useActiveAnchor()
  const config = useConfig()
  const { locale = 'en-US' } = useRouter()

  headings = headings
    ? headings.filter(
        heading => heading.type === 'heading' && heading.depth > 1
      )
    : headings

  const hasHeadings = headings && headings.length > 0
  const hasMetaInfo =
    config.feedbackLink || config.footerEditLink || config.tocExtraContent

  return (
    <div className="nextra-toc order-last hidden w-64 flex-shrink-0 px-4 text-sm xl:block">
      <div className="nextra-toc-content sticky top-16 -mr-4 max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto pr-4 pt-8">
        {hasHeadings && headings ? (
          <ul>
            <p className="mb-4 font-semibold tracking-tight">On This Page</p>
            {headings.map(heading => {
              const text = getHeadingText(heading)
              const slug = slugger.slug(text)

              return (
                <Item
                  heading={heading}
                  activeAnchor={activeAnchor}
                  slug={slug}
                  key={slug}
                />
              )
            })}
          </ul>
        ) : null}

        {hasMetaInfo ? (
          <div
            className={cn(
              'nextra-toc-meta',
              hasHeadings ? 'mt-8 border-t bg-white pt-8 dark:bg-dark' : '',
              'sticky bottom-0 pb-8 dark:border-neutral-800'
            )}
          >
            {config.feedbackLink ? (
              <FeedbackLink
                filepath={filepathWithName}
                repository={config.docsRepositoryBase}
                labels={config.feedbackLabels}
                feedbackLink={config.feedbackLink}
              />
            ) : null}

            {config.footerEditLink ? (
              <EditPageLink
                filepath={filepathWithName}
                repository={config.docsRepositoryBase}
                text={config.footerEditLink}
              />
            ) : null}

            {config.tocExtraContent ? (
              <div className="pt-4 leading-4">
                {renderComponent(config.tocExtraContent, { locale })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}
