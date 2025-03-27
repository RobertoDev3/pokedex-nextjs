import { IconLoading } from '@/assets/icons/svg/icon-loading';
import { cn } from '@/lib/utils';

export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex min-h-full items-center justify-center bg-[#000029]',
        className,
      )}
    >
      <IconLoading />
    </div>
  );
}
