import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Resume from '../pages/resume';
import Projects from '../pages/projects';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Container from '../components/layout/container';
import Content from '../components/layout/content';


export default function Router() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Content>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

