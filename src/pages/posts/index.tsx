import { Posts } from "@/public-app";
import { getData } from "@client/services/getData";

const PostsPage = ({posts}): JSX.Element => <Posts posts={posts} />;

export default PostsPage;

export const getStaticProps = async () => {
    const posts = await getData("https://jsonplaceholder.typicode.com/posts");

    if (!posts) return { notFound: true };

    return {
        props: {
            posts
        }
    };
};
