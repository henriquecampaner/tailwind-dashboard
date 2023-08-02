import { Search } from 'lucide-react';
import { ComponentProps } from 'react';

type InputPrefixProps = ComponentProps<'div'>;
const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />;
};

type InputControlProps = ComponentProps<'input'>;
const InputControl = (props: InputControlProps) => {
  return (
    <input
      placeholder="Search"
      className="flex-1 border-0 bg-transparent
  p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
};

type InputRootProps = ComponentProps<'div'>;

const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg
    border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
};

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
};
