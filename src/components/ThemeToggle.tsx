import { useState } from 'react';

/**
 * Toggles the site appearance. Default appearance is "dark" (royal purple
 * background with white text); the light appearance uses a soft lavender
 * background. Choice is persisted to localStorage.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  );

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      aria-label="Appearance"
      title="Toggle appearance"
      onClick={toggle}
      className="flex items-center justify-center w-8 h-8 text-royal-700 transition-colors hover:text-royal-200 dark:text-white dark:hover:text-royal-200"
    >
      {dark ? (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-4 h-4 align-text-bottom" fill="currentColor">
          <path d="M32 256C32 132.2 132.3 32 255.8 32c11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480 132.1 480 32 379.6 32 256z" />
        </svg>
      ) : (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-4 h-4 align-text-bottom" fill="currentColor">
          <path d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1s41.2 96.9 95.1 96.9 95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347l-63.2-91.9 63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89 164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6 12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256 2.74 347.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109 109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1 0-70.69 57.31-127.1 127.1-127.1S383.1 186.2 383.1 256c0 70.7-56.4 127.1-127.1 127.1z" />
        </svg>
      )}
    </button>
  );
}