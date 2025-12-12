import HeroSection from '../components/home/HeroSection'
import ProjectIntroSection from '../components/home/ProjectIntroSection'
import InteractiveBuilding from '../components/home/InteractiveBuilding'
import ImageBannerSection from '../components/home/ImageBannerSection'
import AvailabilityTable from '../components/home/AvailabilityTable'
import AboutSection from '../components/home/AboutSection'
import StatsSection from '../components/home/StatsSection'
import AmenitiesSection from '../components/home/AmenitiesSection'
import LocationSection from '../components/home/LocationSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectIntroSection />
      <StatsSection />
      <InteractiveBuilding />
      <ImageBannerSection />
      <AvailabilityTable />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
    </>
  )
}

export default HomePage

