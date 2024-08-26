import Navbar from "./components/Navbar"
import Categories from "./components/categories"
import Saleimage from "./components/saleimage"
import Recommend from "./components/recommend"
import Topics from "./components/topics"
import Popular from "./components/popular"
import Footer from "./components/footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Saleimage></Saleimage>
            <Recommend></Recommend>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>

        </div>

    )
}

export default App