import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-cinzel text-xs uppercase tracking-[0.18em]",
    "transition-colors duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-espresso focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-espresso text-brand-linen",
          "hover:bg-brand-espresso/85",
        ],
        outline: [
          "border border-brand-espresso text-brand-espresso",
          "hover:bg-brand-espresso hover:text-brand-linen",
        ],
        ghost: [
          "text-brand-espresso",
          "hover:bg-brand-espresso/8",
        ],
        cream: [
          "bg-brand-cream text-brand-espresso",
          "hover:bg-brand-cream/80",
        ],
      },
      size: {
        sm: "px-4 py-2 text-[10px]",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
