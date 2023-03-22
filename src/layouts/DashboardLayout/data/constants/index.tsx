import { URL_PATHS } from "data/routes";
import { HomeIcon, QuestionMarkCircleIcon } from "lib/@heroicons";
import { ContactImg, InvoiceImg, WithdrawImg } from "components/svg";
interface sideLinkesInterface {
  title: string;
  path: string;
  icon: any;
}
export const sideLinks = [
  {
    title: "Home",
    path: URL_PATHS.HOME,
    icon: <HomeIcon width={20} height={20} />,
  },
  {
    title: "Invoices",
    path: URL_PATHS.INVOICES.INDEX,
    icon: <InvoiceImg width={20} height={20} />,
  },
  {
    title: "Withdraw",
    path: "#",
    icon: <WithdrawImg width={20} height={20} />,
  },
  {
    title: "Contacts",
    path: "#",
    icon: <ContactImg width={20} height={20} />,
  },
  {
    title: "Help",
    path: "#",
    icon: <QuestionMarkCircleIcon width={20} height={20} />,
  },
];
