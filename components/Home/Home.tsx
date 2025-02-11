import HeroSection from "./HeroSection";
import HowItWork from "./HowItWork";
import Feature from "./Feature";
import Testmoney from "./Testimoney";
import PricingPlan from "./PricingPlan";
import Footer from "../Footer"

function Home() {
	return (
		<div>
			<HeroSection />
			<Feature />
			<HowItWork />
			<Testmoney />
			<PricingPlan />
			<Footer />
		</div>
	);
}

export default Home;
