import { Error } from "@client/app/components/Error/Error";

const Error500Page = () => {
    return (
        <Error
            errorCode={500}
            title={"Внутренняя ошибка сервера"}
            text={"Что-то пошло не так, и сейчас сервер не может обработать запрос. Пожалуйста, свяжитесь с технической поддержкой сайта."}
        />
    );
};

export default Error500Page;
