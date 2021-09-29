import './App.css';
import Header from './components/Header';
import { OuterLayout } from './styles/Layout'
import styled from "styled-components";
import CardSection from './components/CardSection'
import ChartSection from './components/ChartSection';
import MessagingSection from './components/MessagingSection';
import PaymentSection from './components/PaymentSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import { Fade } from "react-reveal"

function App() {
  return (
    <>
      <Header />
      <OuterLayout>
        <Fade left>
          <CardSection />
        </Fade>
        <Fade right>
          <ChartSection />
        </Fade>
        <Fade left>
          <MessagingSection />
        </Fade>
        <Fade right>
          <PaymentSection />
        </Fade>
        <Fade left>
        <FAQsection />
        </Fade>
      </OuterLayout>
      <Footer />
    </>
  );
}



export default App;
