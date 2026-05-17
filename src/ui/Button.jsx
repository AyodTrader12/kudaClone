// Reusable Button component with 3 visual variants and 3 sizes
//
// variant: 'primary' | 'outline' | 'ghost'
// size:    'sm' | 'md' | 'lg'
//
// Usage:
//   <Button variant="primary" size="lg" href="/en-ng">Get Kuda Free</Button>
//   <Button variant="outline" onClick={handleClick}>Log In</Button>

const VARIANTS = {
  primary: `
    bg-kuda-purple text-white
    hover:bg-kuda-purple-hover
    shadow-kuda-cta hover:shadow-kuda-lg
  `,
  outline: `
    bg-transparent text-kuda-purple
    border border-kuda-purple
    hover:bg-kuda-purple-light
  `,
  ghost: `
    bg-transparent text-kuda-purple
    hover:bg-kuda-purple-light
  `,
}

const SIZES = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-sm rounded-full',
  lg: 'px-8 py-4 text-base rounded-full',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-bold transition-all duration-200
    cursor-pointer focus:outline-none
    focus-visible:ring-2 focus-visible:ring-kuda-purple focus-visible:ring-offset-2
  `

  const classes = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  // Render as <a> when href is provided, otherwise <button>
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
