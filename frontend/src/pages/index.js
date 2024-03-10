import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Hero from "./../components/modules/index/Hero";
import About from "@/components/modules/index/About";
import Featured from "@/components/modules/index/Featured";
import Roadmap from "@/components/modules/index/Roadmap";
import Blog from "@/components/modules/index/Blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <Header headerClass="header-section--style2" />
      <Hero />
      <About />
      <Featured />
      <Roadmap />
      <Blog />
      <Footer />
    </>
  );
}
