/* 
  Best button out there, made by Eugen a.k.a. Aconime
  Insanely good, fully customizable, etc,

  Legendary programming -> @me

  This button should remain in the project forever, even as legacy.

  Respect the button!
*/

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/shared/Icon";
import React from "react";

/* 
  Best button out there, made by Eugen a.k.a. Aconime
  Insanely good, fully customizable, etc,

  Legendary programming -> @me

  This button should remain in the project forever, even as legacy.

  Respect the button!
*/

const variants = cva(
  "inline-flex items-center justify-center gap-4 outline-none py-2 px-4 rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-slate-950 text-white shadow hover:bg-slate-950/90",
        secondary: "border",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ICoolButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  isLoading?: boolean;
}

/* 
  Best button out there, made by Eugen a.k.a. Aconime
  Insanely good, fully customizable, etc,

  Legendary programming -> @me

  This button should remain in the project forever, even as legacy.

  Respect the button!
*/

const CoolButton = React.forwardRef<HTMLButtonElement, ICoolButton>(
  ({ className, variant, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variants({ variant, className }))}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <Icon icon={faSpinner} className={cn("p-0 animate-spin")} />
        ) : null}

        {children}
      </button>
    );
  }
);

CoolButton.displayName = "CoolButton";

/* 
  Best button out there, made by Eugen a.k.a. Aconime
  Insanely good, fully customizable, etc,

  Legendary programming -> @me

  This button should remain in the project forever, even as legacy.

  Respect the button!
*/

export default CoolButton;
