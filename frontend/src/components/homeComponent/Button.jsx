function Button({
  style,
  title,
  onHandleOrder = () => {},
  textSize = 'text-[.8rem]',
  type = 'button',
}) {
  return (
    <div
      className={`w-full px-4 py-4  ${style} mt-2 flex flex-col items-center justify-center rounded-sm border-[.1rem] border-black/10 cursor-pointer`}
      onClick={onHandleOrder}
    >
      <button
        className={`uppercase  font-semibold tracking-widest cursor-pointer w-full select-none ${textSize}`}
        type={type}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
