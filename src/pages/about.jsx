import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Simon Lewis</title>
        <meta
          name="description"
          content="I’m Simon Lewis. I live in Los Angeles where I study computer science"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Simon Lewis. I live in Los Angeles where I study computer
              science.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My first passion was in the kitchen. I always loved bringing
                people together to share a meal so naturally I became a chef. I
                worked in some great restaurants over the years in London,
                Paris, and Los Angeles. While I loved the pace and the
                creativity of the kitchen, I found some of the most rewarding
                parts of the job were designing systems to optimize the
                production capabilities of the kitchen.
              </p>
              <p>
                In 2015 I partenered with two French entrpreneurs to open one of
                the first barbecue restaurants in Paris. We were able to build a
                great team and create a unique dining experience for our guests
                and enjoyed rapid success and developed a loyal following in our
                neighborhood of Pigalle. I learned a lot about what it is to be
                a leader while working in this position and I am grateful not
                just to my former partners and colleagues, but to the entire
                city of Paris which I called home for nearly 8 years.
              </p>
              <p>
                In late 2019 I moved back to my hometown of Los Angeles with
                aspirations of opening a restaurant to share the experience of
                dining which is so special to me with my community.
                Unfortunately, the Covid pandemic shuttered the restaurant
                industry and I was left idle for the first time in my life. I
                decided to take this opportunity to finally pursue my passion
                for technology and began taking classes in computer science. I
                was instantly hooked.
              </p>
              <p>
                I found that I was able to apply the same principles of design
                and creativity that I had learned in the kitchen to the world of
                software development. I am now a full-time student at the
                University of Southern California where I am studying computer
                science and will be graduating with a B.S. and M.S. in the
                Spring of 2025. In the meantime, I will be throwing myself into
                the world of limitless possibility and learning everything I
                can.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:simonlew@usc.edu"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                simonlew@usc.edu
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
