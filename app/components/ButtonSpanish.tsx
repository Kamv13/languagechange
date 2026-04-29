"use client"

interface ButtonProps {
  onLanguageChange: () => void;
}

export default function ButtonSpanish({ onLanguageChange }: ButtonProps) {
  return (
    <button
      onClick={onLanguageChange}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Español
    </button>
  );
}