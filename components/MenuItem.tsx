import Link from "next/link"
import { IconType } from "react-icons"

type MenuItemProps = {
  title: string,
  address: string,
  Icon: IconType
}

const MenuItem = ({title, address, Icon}: MenuItemProps) => {
  return (
    <Link href={address} className="hover:text-amber-500 ">
      <Icon className="sm:hidden text-2xl "/>
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  )
}

export default MenuItem

