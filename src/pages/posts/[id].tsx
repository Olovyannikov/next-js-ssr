import { getData } from "@client/services/getData";
import { Post } from "@/public-app";

const PostPage = ({ post }): JSX.Element => <Post post={post} />;

export default PostPage;

export const getStaticPaths = async () => {
    const posts = await getData(`https://jsonplaceholder.typicode.com/posts`);

    const paths = posts.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const {id} = context.params
    const post = await getData(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!post) return { notFound: true };

    return {
        props: {
            post
        }
    };
};
