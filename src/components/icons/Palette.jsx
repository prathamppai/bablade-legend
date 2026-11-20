export default function PaletteIcon({ size = 24, className = '', ...props }) {
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
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="18.5" cy="11.5" r="2.5" />
      <circle cx="8.5" cy="16.5" r="2.5" />
      <circle cx="3.5" cy="11.5" r="2.5" />
      <path d="M13.5 9c-1.657 0-3-1.343-3-3s1.343-3 3-3" />
    </svg>
  )
}