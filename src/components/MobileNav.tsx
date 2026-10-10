import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
];

/** Simple mobile navigation island, visible on small screens only. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center w-8 h-8 text-royal-700 dark:text-white hover:text-royal-200 dark:hover:text-royal-200 transition-colors"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="inline-block w-4 h-4" fill="currentColor">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3 54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="inline-block w-4 h-4" fill="currentColor">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        )}
      </button>
      {open && (
        <nav className="absolute right-0 top-full mt-2 w-40 rounded-md border border-royal-200 dark:border-royal-700 bg-royal-50 dark:bg-royal-600 shadow-lg py-2 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block px-4 py-2 hover:bg-royal-100 dark:hover:bg-royal-700">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}