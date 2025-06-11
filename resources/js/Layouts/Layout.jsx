
import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <main>
      <Header/>
      <div className="dashboardContainer bg-[#F2F2F2]  pb-[100px]">
        {children}
      </div>
      <Footer/>
    </main>
  )
}