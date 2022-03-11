import Link from "next/link";

import s from "./Navbar.module.scss";
import { navbarData } from "./Navbar.data";
import { useRouter } from "next/router";

export const Navbar = ({}): JSX.Element => {
    const { pathname } = useRouter();

    return (
        <nav className={s.nav}>
            <div className={s.logo}>Logo</div>
            <ul className={s.list}>
                {navbarData.map(({ path, text, id }) =>
                    <li key={id}>
                        <Link href={path}><a className={pathname === path ? s.active : ''}>{text}</a></Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
