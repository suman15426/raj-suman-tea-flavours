export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 animate-fade-in">
      <img
        src="/tea-logo.png"
        alt="RajSuman Logo"
        className="w-24 h-24 mb-6 animate-bounce"
      />
      <h1 className="text-5xl font-bold text-green-800 mb-4">
        RajSuman Tea Flavours
      </h1>
      <p className="text-xl italic text-gray-700">
        Where Human Meets Relax ☕<br />
        A sip of soul in every blend.
      </p>
    </div>
  );
}