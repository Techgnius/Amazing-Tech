import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="/">
                <p className="flex items-center text-white py-2 px-3 rounded hover:bg-gray-700">
                  <span className="font-bold">AmazingTech</span>
                </p>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/courses">
                <p className="py-2 px-3 rounded hover:bg-gray-700">Courses</p>
              </Link>
              <Link href="/about">
                <p className="py-2 px-3 rounded hover:bg-gray-700">About</p>
              </Link>
              <Link href="/contact">
                <p className="py-2 px-3 rounded hover:bg-gray-700">Contact</p>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login">
              <p className="py-2 px-3 rounded hover:bg-gray-700">Login</p>
            </Link>
            <Link href="/signup">
              <p className="py-2 px-3 rounded bg-blue-500 hover:bg-blue-600">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
