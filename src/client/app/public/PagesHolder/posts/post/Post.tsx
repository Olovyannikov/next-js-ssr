import { Layout } from "@/layouts/Layout";

export const Post = ({ post }): JSX.Element => {
    return (
        <Layout>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </Layout>
    );
};
