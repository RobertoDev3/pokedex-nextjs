import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-[#333333] text-white hover:bg-[#333333]/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        disabled: "bg-secondary text-secondary-foreground cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline",
        none: "",

        // Pokemon types
        water: "bg-[#5090D6] text-black hover:bg-[#5090D6]/90",
        dragon: "bg-[#0B6DC3] text-white hover:bg-[#0B6DC3]/90",
        eletric: "bg-[#F4D23C] text-black hover:bg-[#F4D23C]/90",
        fairy: "bg-[#EC8FE6] text-black hover:bg-[#EC8FE6]/90",
        ghost: "bg-[#5269AD] text-white hover:bg-[#5269AD]/90",
        fire: "bg-[#FF9D55] text-black hover:bg-[#FF9D55]/90",
        ice: "bg-[#73CEC0] text-black hover:bg-[#73CEC0]/90",
        grass: "bg-[#63BC5A] text-black hover:bg-[#63BC5A]/90",
        bug: "bg-[#91C12F] text-black hover:bg-[#91C12F]/90",
        fighting: "bg-[#CE416B] text-white hover:bg-[#CE416B]/90",
        normal: "bg-[#919AA2] text-black hover:bg-[#919AA2]/90",
        dark: "bg-[#5A5465] text-white hover:bg-[#5A5465]/90",
        steel: "bg-[#5A8EA2] text-black hover:bg-[#5A8EA2]/90",
        rock: "bg-[#C5B78C] text-black hover:bg-[#C5B78C]/90",
        psychic: "bg-[#FA7179] text-black hover:bg-[#FA7179]/90",
        ground: "bg-[#D97845] text-black hover:bg-[#D97845]/90",
        poison: "bg-[#B567CE] text-white hover:bg-[#B567CE]/90",
        flying: "bg-[#89AAE3] text-black hover:bg-[#89AAE3]/90",
      },
      size: {
        default: "py-3 px-4 min-w-[156px] rounded-full",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
