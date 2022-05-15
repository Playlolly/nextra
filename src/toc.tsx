import React from 'react'
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
  text: string
  filepath: string
}) => {
  const url = useConfig().docsRepositoryBase
  const { locale } = useRouter()
  return (
    <a
      className="text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
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
  text,
  filepath,
  labels
}: {
  repository?: string
  text: string
  filepath: string
  labels?: string
}) => {
  const url = useConfig().docsRepositoryBase
  const { locale } = useRouter()
  return (
    <a
      className="text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text
        ? renderComponent(text, {
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
      className="scroll-py-6 scroll-my-6"
      style={indent(heading.depth)}
      ref={ref}
    >
      <a
        href={`#${slug}`}
        className={cn(
          'no-underline inline-block',
          heading.depth === 2 ? 'font-semibold' : '',
          state?.isActive
            ? 'text-primary-500 subpixel-antialiased'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
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
  const { locale } = useRouter()

  headings = headings
    ? headings.filter(
        heading => heading.type === 'heading' && heading.depth > 1
      )
    : headings

  const hasHeadings = headings && headings.length > 0
  const hasMetaInfo =
    config.feedbackLink || config.footerEditLink || config.tocExtraContent

  return (
    <div className="nextra-toc w-64 hidden xl:block text-sm px-4">
      <div className="nextra-toc-content overflow-y-auto pr-4 -mr-4 sticky max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] top-16 pt-8">
        {hasHeadings && headings ? (
          <ul>
            <p className="font-semibold tracking-tight mb-4">On This Page</p>
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
              hasHeadings ? 'border-t mt-8 pt-8  bg-white dark:bg-dark' : '',
              'sticky pb-8 bottom-0 dark:border-neutral-800'
            )}
          >
            {config.feedbackLink ? (
              <FeedbackLink
                filepath={filepathWithName}
                repository={config.docsRepositoryBase}
                labels={config.feedbackLabels}
                text={config.feedbackLink}
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
