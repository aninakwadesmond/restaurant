function Button({ style, title, onHandleOrder = () => {} }) {
  return (
    <div
      className={`w-full px-4 py-4 shadow-lg ${style} mt-2 flex flex-col items-center justify-center rounded-sm border-[.1rem] border-black/10 cursor-pointer`}
      onClick={onHandleOrder}
    >
      <button className="uppercase text-[.8rem] font-semibold tracking-widest cursor-pointer w-full select-none">
        {title}
      </button>
    </div>
  );
}

export default Button;
