export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded-xl border border-primary bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
      {...props}
    />
  );
}
