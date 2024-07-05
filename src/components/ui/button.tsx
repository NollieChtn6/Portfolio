import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-light ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 w-24',
  {
    variants: {
      variant: {
        default:
          'bg-grandis-300 text-mine-shaft-700 hover:bg-grandis-200 hover:scale-105 transition delay-50 uppercase text-sm font-mono',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 hover:scale-105 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline:
          'border text-wild-sand-100 border-grandis-300 hover:bg-grandis-200 hover:text-mine-shaft-700 hover:scale-105 transition delay-50 uppercase text-xs font-mono',
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        ghost:
          'hover:bg-mine-shaft-300 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 text-lg uppercase text-royal-blue-400 ',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
        mobile:
          'bg-grandis-300 text-mine-shaft-700 hover:bg-grandis-200 uppercase text-lg font-mono',
      },
      size: {
        default: 'h-10 px-4 py-2 w-[100px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        cta: 'h-11 rounded-md px-8 w-[180px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
