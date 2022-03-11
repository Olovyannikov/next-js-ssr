import { Contact } from "@/public-app";
import { getData } from "@client/services/getData";
import { GetServerSideProps } from "next";
import { ContactInterface } from "@client/types/types";

type contactTypeProps = {
    contact: ContactInterface;
}

const ContactPage = ({ contact }: contactTypeProps): JSX.Element => <Contact contact={contact} />;

export default ContactPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const data = await getData(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!data) return { notFound: true };

    return {
        props: { contact: data }
    };
};
