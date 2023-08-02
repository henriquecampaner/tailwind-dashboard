import { LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/henriquecampaner.png"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Henrique Campaner
        </span>
        <span className="truncate text-sm text-zinc-500">
          henrique.campaner@live.com
        </span>
      </div>

      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  );
};
export { Profile };
