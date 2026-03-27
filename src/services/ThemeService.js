export const ThemeService = {
  getInitialTheme() {
    const storedTheme = window.localStorage.getItem('medical-demo-theme');
    const initialTheme = storedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', initialTheme);
    return initialTheme;
  },
  toggle(currentTheme) {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('medical-demo-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    return nextTheme;
  }
};
