import {
  Icon,
  Search,
  ChevronLeft,
  ExclamationTriangle,
  Dash,
  Plus,
  Check,
  XLg,
} from "react-bootstrap-icons";

interface Props {
  Icon: Icon;
  className?: string;
  onClick?: () => void;
}
const BUIIcon = ({ Icon, className, onClick }: Props) => {
  return (
    <Icon
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "inherit" }}
    />
  );
};

interface PropsIcon {
  className?: string;
  onClick?: () => void;
}

export const SearchIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={Search} />
);
export const ChevronLeftIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={ChevronLeft} />
);
export const WarningIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={ExclamationTriangle} />
);
export const DashIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={Dash} />
);
export const PlusIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={Plus} />
);
export const CheckIcon = ({ className }: PropsIcon) => (
  <BUIIcon className={className} Icon={Check} />
);
export const CrossIcon = ({ className, onClick }: PropsIcon) => (
  <BUIIcon className={className} Icon={XLg} onClick={onClick} />
);
