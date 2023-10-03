import Header from '../components/Header'
import Footer from '../components/Footer'
import PageContent from '../components/PageContent'
import '../App.css'

export default function Template() {
    return (
        <div className = "App">
            <Header />
            <PageContent />
            <Footer />
        </div>
    )
}