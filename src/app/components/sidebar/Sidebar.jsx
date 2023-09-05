'use client';
import Image from "next/image";
import avatar from "../../assests/avatar.png";
import { Icon } from "@tremor/react";
import { HandIcon, HomeIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import Link from "next/link";
import {  useContext } from "react";
import classNames from "classnames";
import GlobalContext from "@/app/GlobalContext/globalContext";
import { TagIcon } from "@heroicons/react/outline";
import './Sidebar.css'

export default function Sidebar() {
  const {toggleSidebar,setToggleSidebar} = useContext(GlobalContext)

  return (
    <div className={classNames('md:w-230px bg-[#333]  h-screen',{'w-[47px] md:w-[50px]' : toggleSidebar,' w-full fixed md:w-[230px]  z-50 md:relative' : !toggleSidebar})}>
    <div className='Sidebar-AreaImage'>
      <Image
        src={avatar}
        width={100}
        height={100}
        className="Sidebar-Avatar"
        alt="avatar"
      />
      <p className={classNames("py-3 text-xl text-bold",{"hidden":toggleSidebar})}>Erlanggaht</p>
    </div>
    
    <ul className="Menu-Sidebar">
    {/* Menu Mobile Toggle */}
    
        <li className="List-Sidebar " onClick={() => setToggleSidebar(!true || !toggleSidebar)}>
          <Icon size="sm" icon={MenuAlt1Icon} className="menu-mobile-toggle text-white " />
          <span className={classNames('inline', {'inline' : !toggleSidebar, 'hidden':toggleSidebar})}>Hide</span>
        </li>

      <Link href={"/"}>
        <li className="List-Sidebar">
          <Icon size="sm" icon={HomeIcon} className="text-white" />
          <span className={classNames('inline', {'inline' : !toggleSidebar, 'hidden':toggleSidebar})}>Dashboard</span>
        </li>
      </Link>
      <Link href={"/pages/data"}>
      <li className="List-Sidebar">
        <Icon size="sm" icon={TagIcon} className="text-white" />
        <span className={classNames('inline', {'inline' : !toggleSidebar, 'hidden':toggleSidebar})}>Data Table</span>
      </li>
      </Link>
      <li className="List-Sidebar">
        <Icon size="sm" icon={HandIcon} className="text-white" />
        <span className={classNames('inline', {'inline' : !toggleSidebar, 'hidden':toggleSidebar})}>Area Chart</span>
      </li>
      <li className="List-Sidebar">
        <Icon size="sm" icon={HandIcon} className="text-white" />
        <span className={classNames('inline', {'inline' : !toggleSidebar, 'hidden':toggleSidebar})}>Area Chart</span>
      </li>
    </ul>
  </div>  )
}
