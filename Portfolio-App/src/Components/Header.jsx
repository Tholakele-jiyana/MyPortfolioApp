function Header() {
  return (
    <nav className="bg-[#C04000] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-xl font-bold">LT-Portfolio</a>

        {/* Navigation Links */} 
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
          <li><a href="#features" className="hover:text-indigo-400">About</a></li>
          <li><a href="#pricing" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#pricing" className="hover:text-indigo-400">Contact</a></li>

          
        </ul>
      </div>
    </nav>
  );
}

export default Header;