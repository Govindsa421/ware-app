import About from './components/About'
import Banner from './components/banner'
import BannerComponent from './components/banner/banner'
import FormComponent from './components/request'
import CustomerReviews from './components/reviews'
import ScrollToTop from './components/scroll'
import CustomCarousel from './components/slider'
import TextImage from './components/text-image'

export default function Home() {
  return (
    <div className=''>
      <Banner />
      <About />
      <TextImage />
      <CustomerReviews />
      <CustomCarousel />
      <BannerComponent />
      <FormComponent />
      <ScrollToTop />
    </div>
  )
}
