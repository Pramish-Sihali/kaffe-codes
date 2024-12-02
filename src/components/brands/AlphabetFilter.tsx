"use client";

const AlphabetFilter = ({ 
    selectedLetter, 
    onLetterClick,
  }: { 
    selectedLetter: string;
    onLetterClick: (letter: string) => void;
  }) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
    return (
      <div className="w-48 border-r border-gray-200 min-h-screen p-4">
        <div className="sticky top-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Brands"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="space-y-2">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => onLetterClick(letter)}
                className={`block w-full text-left px-2 py-1 rounded ${
                  selectedLetter === letter
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AlphabetFilter;
  