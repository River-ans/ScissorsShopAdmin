import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface SidebarItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();

  // 현재 경로가 SidebarItem의 href와 일치하는지 확인하여 active 상태 적용
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`flex gap-2 items-center p-3 rounded-md transition duration-200 ${
          isActive
            ? 'bg-primary-500/10 text-primary-300'
            : 'text-primary-500 hover:text-primary-300'
        }`}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
};

export default SidebarItem;
