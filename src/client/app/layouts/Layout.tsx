import { PropsWithChildren } from "react";

import Head from "next/head";

import { Main } from "./Main/Main";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import s from './Layout.module.scss';
import { LayoutProps } from "./Layout.props";

export const Layout = ({ children, title }: PropsWithChildren<LayoutProps>): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
