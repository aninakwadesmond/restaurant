function Button({ style, title }) {
  return (
    <div
      className={`w-full px-4 py-4 shadow-lg ${style} mt-2 flex flex-col items-center justify-center rounded-sm border-[.1rem] border-black/10 cursor-pointer`}
    >
      <button className="uppercase text-[.8rem] font-semibold tracking-widest">
        {title}
      </button>
    </div>
  );
}

export default Button;
