import cn from "classnames";
import { PropsWithChildren } from "react";

import s from './Title.module.scss';
import { TitleProps } from "./Title.props";

export const Title = ({ level = 'h2', children, className, ...props  }: PropsWithChildren<TitleProps>): JSX.Element => {
    const Tag = level;
    return <Tag className={cn(s.title, className)} {...props}>{children}</Tag>
};
