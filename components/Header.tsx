import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from './SearchButton';

const Header = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-navMarginTop flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) =>
            isProduction ? (
              !['Projects', 'Experience'].includes(link.title) && (
                <Link
                  key={link.title}
                  href={link.href}
                  className={
                    link.title === 'Resume'
                      ? 'hidden font-bold text-logoColor sm:block'
                      : 'hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                  }
                >
                  {link.title}
                </Link>
              )
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className={
                  link.title === 'Resume'
                    ? 'hidden font-bold text-logoColor sm:block'
                    : 'hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                }
              >
                {link.title}
              </Link>
            )
          )}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
