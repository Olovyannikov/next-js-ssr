import { Layout } from "@/layouts/Layout";

import Left from "./img/404-left.svg";
import Right from "./img/404-right.svg";

import s from "./Error.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Error = ({ errorCode, title, text }): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <Layout title="Ошибка 404">
            <section className={s.error}>
                <h1>{errorCode}</h1>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={s.images}>
                    <Left />
                    <Right />
                </div>
            </section>
        </Layout>
    );
};
