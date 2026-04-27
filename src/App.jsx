import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import About        from './components/About'
import PopularPicks from './components/PopularPicks'
import Menu         from './components/Menu'
import Gallery      from './components/Gallery'
import Visit        from './components/Visit'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <PopularPicks />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
