export const HeadingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={`text-main-900 mb-12 text-4xl font-bold leading-none sm:text-5xl ${className}`}>
      {text}
    </h2>
  );
};
