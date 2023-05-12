import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export default {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Cerpsoft'} />
      <meta property="og:description" content={frontMatter.description || 'The Cerpsoft site builder'} />
    </>
  },
}