// eslint-disable-next-line react/prop-types
const Button = ({ isButton, label, href, bgColor, icon }) => {
  return (
    <div>
      {isButton ? (
        <button
          className={`text-white ${bgColor ? bgColor : "bg-blue-400"} flex cursor-pointer items-center gap-2 rounded-2xl pb-2 pl-3 pr-3 pt-2`}
        >
          {label}
          {icon && (
            <img
              src={icon}
              alt={`${label} icon`}
              className="h-5 w-5 rounded-full shadow-md shadow-black/20"
            />
          )}{" "}
          {/* Display icon */}
        </button>
      ) : (
        <a
          className={`text-white ${bgColor ? bgColor : "bg-blue-400"} flex items-center gap-2 rounded-2xl pb-2 pl-3 pr-3 pt-2`}
          href={href}
          target="_blank"
        >
          {label}
          {icon && (
            <img
              src={icon}
              alt={`${label} icon`}
              className="h-5 w-5 rounded-full shadow-md shadow-black/20"
            />
          )}
        </a>
      )}
    </div>
  );
};

export default Button;
