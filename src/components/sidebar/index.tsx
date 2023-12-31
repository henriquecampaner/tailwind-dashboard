import { Logo } from './Logo';
import {
  Home,
  Search,
  BarChart,
  CheckSquare,
  Flag,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react';
import { NavItem } from './NavItem';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import { Input } from '../Input';

const SideBar = () => {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  );
};

export { SideBar };
