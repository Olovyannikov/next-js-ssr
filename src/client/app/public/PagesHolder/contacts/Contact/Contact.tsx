import { Layout } from "@/layouts/Layout";
import { Title } from "@/ui";

import { ContactProps } from "./Contact.props";

export const Contact = ({ contact }: ContactProps): JSX.Element => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    if (!contact) return <Title level="h3">Empty Contact</Title>;

    return (
        <Layout>
            <Title level="h3">{name}</Title>
            <div>
                <strong>Email: </strong> {email}
            </div>
            <div><strong>Address: </strong> {`${street}, ${suite}, ${city}, ${zipcode}`}</div>
        </Layout>
    );
};
