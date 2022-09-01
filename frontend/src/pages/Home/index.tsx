import Footer from '../../components/Footer';
import Info from '../../components/Info';
import Inicial from '../../components/Inicial';
import Navbar from '../../components/Navbar';
import './style.css';

function Home() {
    return (
        <body>
            <header>
                <Navbar />
                <Inicial />
            </header>
            <main>
                <hr />
                <Info />
            </main>
            <Footer />
        </body>
    );
}

export default Home;