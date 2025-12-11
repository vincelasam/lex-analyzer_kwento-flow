const Footer = () => {
  const Squiggle = () => (
    <svg
      width="60"
      height="10"
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gold opacity-60"
    >
      <path
        d="M1 5C1 5 5 1 10 1C15 1 15 9 20 9C25 9 25 1 30 1C35 1 35 9 40 9C45 9 45 1 50 1C55 1 59 5 59 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <footer className="py-6 flex justify-center items-center gap-4 bg-parchment mt-auto">
      <Squiggle />
      <span className="font-serif italic text-xl text-gold opacity-60 font-medium">
        KwentoFlow
      </span>
      <div className="scale-x-[-1]">
        <Squiggle />
      </div>
    </footer>
  );
};

export default Footer;
