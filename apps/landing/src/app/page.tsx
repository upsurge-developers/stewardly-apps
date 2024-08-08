import About from '@/components/about'
import Contact from '@/components/contact'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import NavigationBar from '@/components/navbar'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
