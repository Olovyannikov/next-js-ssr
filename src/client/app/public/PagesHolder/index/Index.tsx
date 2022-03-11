import { Layout } from "@/layouts/Layout";

import { Title } from "@/ui";
import { Socials } from "@client/app/components/Socials/Socials";

export const Index = ({socials}): JSX.Element => {
    return (
        <Layout title="Главная">
            <section>
                <Title>Index Page</Title>

                <Socials socials={socials}/>
            </section>
        </Layout>
    );
};

