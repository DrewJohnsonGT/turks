export const HeadingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={`text-main-900 mb-8 text-3xl font-bold leading-none sm:text-4xl ${className}`}>
      {text}
    </h2>
  );
};
