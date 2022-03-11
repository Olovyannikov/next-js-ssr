import { Index } from "@/public-app";
import { getData } from "@client/services/getData";

const IndexPage = ({socials}): JSX.Element => <Index socials={socials} />;

export default IndexPage;

export const getStaticProps = async () => {
    const socials = await getData(`${process.env.API_HOST}/socials/`);

    if (!socials) return { notFound: true };

    return {
        props: { socials }
    };
};
