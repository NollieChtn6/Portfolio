function HomePage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 p-6 text-woodsmoke-100 h-full">
      <div className="flex flex-col homepage-left-side">
        <h2 className="hero-title flex w-full bg-slate-700 text-3xl">
          Noëllie Chatain Six
        </h2>
        <p className="hero-subtitle flex w-3/4 animate-typing overflow-hidden whitespace-nowrap font-mono border-r-4">
          Développeuse web junior
        </p>
      </div>
      <div className="homepage-left-side w-full md:w-2/4">3</div>
    </main>
  );
}

export default HomePage;
