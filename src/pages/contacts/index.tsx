import { Contacts } from "@/public-app";
import { getData } from "@client/services/getData";
import { GetStaticProps } from "next";

const ContactsPage = ({ contacts }): JSX.Element => <Contacts contacts={contacts} />;

export default ContactsPage;

export const getStaticProps: GetStaticProps = async () => {
    const contacts = await getData("https://jsonplaceholder.typicode.com/users");

    if (!contacts) return { notFound: true };

    return {
        props: {
            contacts
        }
    };
};
