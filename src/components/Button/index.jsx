export const Button = ({ variant, children, ...props }) => {
  return (
    <button className={`button ${variant}`}>
      {children}
    </button>
  );
};
