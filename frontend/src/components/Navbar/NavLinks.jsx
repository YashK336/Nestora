const navLinks = [
    "Buy",
    "Sell",
    "Rent",
    "Commercial",
    "PG",
    "Plots",
    "Insights",
  ];
  
  const NavLinks = () => {
    return (
      <ul className="hidden xl:flex items-center gap-1 2xl:gap-2">
        {navLinks.map((item) => (
          <li key={item}>
            <button
              className=" group
              relative
              rounded-full
              px-3 py-2
              2xl:px-4
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-blue-300
            "
            >
              {item}
  
              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  transition-all
                  duration-300
                  group-hover:w-8
                "
              ></span>
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavLinks;