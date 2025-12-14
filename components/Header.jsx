export default function Header() {
    return (
        <header className="w-full relative flex flex-col items-center">
            <img src="./images/myprofile.png" alt="Background" className="w-full
             h-fit object-cover"/>
            <img src="./images/profile.svg" alt="Profile" className="w-full
             h-32 object-cover border-10 border-gray-100"/>
        </header>
    )
}