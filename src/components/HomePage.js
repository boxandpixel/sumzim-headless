import HomeFeaturedCards from './HomeFeaturedCards';
import HomeHeroHeadline from './HomeHeroHeadline';
import HomeServiceIcons from './HomeServiceIcons';
import HomeTheDifference from './HomeTheDifference';
import HomeCircleFeatures from './HomeCircleFeatures';
import HomeBrands from './HomeBrands';
import HomeStaff from './HomeStaff';
import HomeContentFeatures from './HomeContentFeatures';
import HomePageStyles from './HomePage.module.scss';


// Template_HomePage_Homepage
function HomePage() {
  return (
    <>
      <div class={HomePageStyles.home__section}>
        <HomeHeroHeadline />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeFeaturedCards />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeServiceIcons />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeTheDifference />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeStaff />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeCircleFeatures />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeContentFeatures />
      </div>

      <div class={HomePageStyles.home__section}>
        <HomeBrands />
      </div>
    </>
  )

}

export default HomePage;
