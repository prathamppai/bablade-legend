export default function DuolingoIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2L4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8L12 2z" />
      <path d="M8 14h8" />
      <path d="M12 10v4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}