import { IconArrowLeft } from "@/assets/icons/svg/icon-arrow-left";
import { IconChevronLeft } from "@/assets/icons/svg/icon-chevron-left";
import { IconEyeClosed } from "@/assets/icons/svg/icon-eye-closed";
import { IconEyeOpen } from "@/assets/icons/svg/icon-eye-open";
import { IconSearch } from "@/assets/icons/svg/icon-search";
import { IconTrash } from "@/assets/icons/svg/icon-trash";

export default function Home() {
  return (
    <main className="m-12 flex flex-col gap-4 bg-red-300">
      <div className="flex gap-4">
        <IconEyeOpen className="size-10" />
        <IconEyeClosed className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconChevronLeft className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconArrowLeft className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconSearch className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconTrash className="size-10" />
      </div>
    </main>
  );
}
