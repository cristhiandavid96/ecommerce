import { Configure } from 'react-instantsearch-dom'

import { Banner } from '@/components/banner/banner'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'
import BannerImage from '@/public/static/images/home/banner.jpg'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

      <Banner
        size="xl"
        title="Nuevos<br />Disfraces"
        subtitle="sex shop"
        image={BannerImage}
        imageAlt="Nuevos Disfraces - sex shop"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />

      <ProductsShowcase
        title="New in shoes"
        indexId="shoes"
        query="shoes"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="sex shop"
        indexId="spring-summer-2023"
        ruleContexts={['home-spring-summer-2023']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Recommended for you"
        indexId="recommended"
        query="jacket"
        hitComponent={ProductCardHitShowcase}
      />
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
