import { Title } from "@/ui";
import { Layout } from "@/layouts/Layout";
import Link from "next/link";

export const Posts = ({ posts }): JSX.Element => {
    return (
        <Layout>
            <section>
                <Title level="h1">POSTS PAGE</Title>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                )}
            </section>
        </Layout>
    );
};
