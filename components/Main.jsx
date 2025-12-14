export default function Main() {
    return (
        <main className="px-6 pb-6 space-y-4">
            {/* Profile Info */}
            <div className="text-center space-y-1">
                <h1 className="text-2xl font-bold text-white mt-10">Ulaş Gökkaya</h1>
                <p className="text-orange-400 text-sm">Developer of Something</p>
                <a href="#" className="text-white text-xs hover:underline"></a>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <button className="flex-1 bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 flex items-center justify-center gap-2">
                    <img src="./images/email.svg" alt="Email" className="w-4 h-4"/>
                    Email
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                    <img src="./images/linkedin1.svg" alt="LinkedIn" className="w-4 h-4"/>
                    LinkedIn
                </button>
            </div>
            {/* About Section */}
            <div className="space-y-2">
                <h2 className="text-white font-semibold">About</h2>
                <p className="text-white text-sm leading-relaxed">
                    Hello Everyone! I'm Ulaş, I'm 19 years old. I'm a 2nd grade computer engineering student at Izmir Institute of High Technology. I love coding and developing new things.
                </p>
            </div>
            {/* Interests Section */}
            <div className="space-y-2">
                <h2 className="text-white font-semibold">Interests</h2>
                <p className="text-white text-sm leading-relaxed">
                    I'm enthusiastic to learn Python, Kotlin, React, HTML, CSS and Next.js too.My one of the favourite activity is watching F1 in my free time and I have watched F1 for 13 years. And also I play its games in some platforms. My favourite driver is Charles Leclerc.
                </p>
            </div>
        </main>
    )
}