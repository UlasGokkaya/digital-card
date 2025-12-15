export default function Footer() {
    return (
        <footer className="px-6 pb-6">
            <div className="flex items-center justify-center gap-4 bg-gray-700 py-3 rounded-lg">
                <a href="https://x.com/githubtestweet" className="hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
                    <img src="./images/x.svg" alt="X" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/ulas.gokkaya" className="hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
                    <img src="./images/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/ulasgokkaya7/" className="hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
                    <img src="./images/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://github.com/UlasGokkaya" className="hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
                    <img src="./images/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
            </div>
        </footer>
    )
}