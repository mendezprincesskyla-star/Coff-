import Hero from '@/src/components/Hero';
import ValueProps from '@/src/components/ValueProps';
import FeaturedMenu from '@/src/components/FeaturedMenu';
import Testimonials from '@/src/components/Testimonials';
import BrandStory from '@/src/components/BrandStory';
import EmailCapture from '@/src/components/EmailCapture';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedMenu />
      <BrandStory />
      <Testimonials />
      <EmailCapture />
    </>
  );
}
