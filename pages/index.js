import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

import LoginPage from "../components/Layout/login";
import RegisterPage from "../components/Layout/rejister"
export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
     
        <Hero />
        {/* <LoginPage/>
        <RegisterPage/> */}
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
