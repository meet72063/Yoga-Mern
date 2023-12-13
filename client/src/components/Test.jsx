const Dropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        toggleDropdown();
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white focus:outline-none"
            >
                <span>{selectedLanguage}</span>
                <svg
                    className="w-4 h-4 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 12l-8 8-1.4-1.4L7.2 12H2v-2h5.2l-1.6-1.6L2 5l8 8zm0-10l8 8 1.4-1.4L12.8 6H18v-2h-5.2l1.6-1.6L18 5l-8-8z" />
                </svg>
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md">
                    {/* Language dropdown content */}
                    <ul className="py-2">
                        <li onClick={() => selectLanguage('English')} className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200">
                            English
                        </li>
                        {/* Add more language options as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
};