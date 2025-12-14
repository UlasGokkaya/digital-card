export default function Footer() {
    return (
        <footer className="px-6 pb-6">
            <div className="flex items-center justify-center gap-4 bg-gray-700 py-3 rounded-lg">
                <a href="#" className="hover:opacity-75 transition-opacity">
                    <img src="./images/x.svg" alt="X" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                    <img src="./images/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                    <img src="./images/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                    <img src="./images/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
            </div>
        </footer>
    )
}