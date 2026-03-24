export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-6 py-2 rounded-xl font-semibold bg-button text-buttonText shadow transition hover:bg-accent hover:text-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
