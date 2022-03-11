import Link from "next/link";

import { Title } from "@/ui";
import { Layout } from "@/layouts/Layout";
import { ContactProps } from "./Contact.props";

export const Contacts = ({ contacts }: ContactProps): JSX.Element => {
    return (
        <Layout title="Контакты">
            <section>
                <Title>Contacts Page</Title>
                <ul>
                    {contacts && contacts.map(({ id, name, email }) =>
                        <li key={id}>
                            <Link href={`/contacts/${id}`}><a><strong>{name}</strong> ({email})</a></Link></li>
                    )}
                </ul>
            </section>
        </Layout>
    );
};

