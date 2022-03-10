export default function Button({ children }) {
  return (
    <button className="rounded-md text-xl border font-medium bg-cyan-800 text-white py-2 px-6 inline-flex items-center hover:bg-cyan-300 hover:text-black">
      {children}
    </button>
  );
}
