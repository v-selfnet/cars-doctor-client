import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const loadService = useLoaderData();
    // const { title, service_id} = loadService;

    // console.log(loadService)

    return (
        <div>
            <h3>Check out: {loadService.title}</h3>
        </div>
    );
};

export default CheckOut;