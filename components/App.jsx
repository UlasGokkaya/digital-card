import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Main from "./main.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    )
}