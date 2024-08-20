'use client';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from '../contexts/app/app.provider';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Banner from 'sections/banner';
import Layout from 'components/layout';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import Feature from 'sections/feature';
import CoreFeature from 'sections/core-feature';
import WorkFlow from 'sections/workflow';
import Package from 'sections/package';
import TeamSection from 'sections/team-section';
import TestimonialCard from 'sections/testimonial';
import BlogSection from 'sections/blog-section';
import Subscribe from 'sections/subscribe';
import Yellobook from 'components/yellowbook';
import Marquee from 'components/marquee';


export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner/>
          <Marquee />
          <Yellobook/>
          <KeyFeature />
          <ServiceSection />
          {/* <Feature/> */}
          {/* <CoreFeature/> */}
          {/* <WorkFlow/> */}
          {/* <Package/> */}
          <TeamSection/>
          <TestimonialCard/>
          {/* <BlogSection/> */}
          <Subscribe/>
          {/* <Sub/> */}
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}

