export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-center text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Chhotu❤️Patel</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
