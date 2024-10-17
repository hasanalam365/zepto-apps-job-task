import { useNavigate } from "react-router-dom";

const ErrorElement = () => {

    const navigate=useNavigate()

    const handlerGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="space-y-4 flex flex-col items-center justify-center">
                <h2 className="text-6xl font-bold">404</h2>
                <p>Oh! Not Found this Page!</p>
                 <button onClick={handlerGoBack} className="btn bg-red-600 text-white font-medium p-2 rounded-lg">Go Back</button>
           </div>
        </div>
    );
};

export default ErrorElement;