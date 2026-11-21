function Subscirbe() {
  return (
    <div className="flex flex-col h-100 bg-black/90 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-3 w-[80%]">
        <h3 className="text-[1.4rem] tracking-wide text-white">
          Join the Culinary Inner Cirlce{' '}
        </h3>
        <p className="text-white/50 text-sm font-semibold tracking-[.2rem] text-center">
          Subscribe to receive first access to new openings and seasonal tasting
          menus.
        </p>
        <div className="w-full bg-black/10 mt-6 h-12 rounded-md shadow-lg overflow-hidden">
          <input
            type="email"
            className="w-full h-full outline-none px-4 py-2 bg-black/50 rounded-md font-semibold text-gray-400 tracking-wide"
            placeholder="Email Address"
          />
        </div>
        <button className="w-full bg-white rounded-md h-10 font-semibold text-[.8rem] tracking-[.2rem]  cursor-pointer uppercase">
          subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscirbe;
