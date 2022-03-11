import { Error } from "@client/app/components/Error/Error";

const Error404Page = () => {
    return (
        <Error
            errorCode={404}
            title={"Страница не найдена"}
            text={"Запрашиваемой страницы не существует. Возможно, она была удалена или допущена ошибка в адресе страницы. Проверьте правильность адреса, или вернитесь на главную."}
        />
    );
};

export default Error404Page;
