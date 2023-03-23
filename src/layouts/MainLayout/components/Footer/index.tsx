import { Link } from "components";

type FoooterPropsType = {
  className: string;
};
export const Footer = ({ className }: FoooterPropsType) => {
  return (
    <footer
      className={`flex justify-evenly items-center py-6 px-4 text-xs sm:px-12 sm:justify-center sm:text-sm ${className}`}
    >
      <Link href="#">Talents Valley</Link>
      <Link href="#" className="px-3 sm:px-16">
        Contacts
      </Link>
      <Link href="#">Privacy & Terms</Link>
    </footer>
  );
};
