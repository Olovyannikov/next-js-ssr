import cn from "classnames";
import { PropsWithChildren } from "react";

import s from './Main.module.scss';

export const Main = ({ children, className, ...props }: PropsWithChildren<any>): JSX.Element =>
    <main className={cn(s.main, className)} {...props}>
        {children}
    </main>;
