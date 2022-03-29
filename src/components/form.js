export default function Form(){
    return(
        <div className="">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 h-full">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-14" type="text" name="name" />
                    </label>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-14" type="email" name="email" />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message:
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-28" name="email" />
                    </label>
                </div>
                    <input className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" />
            </form>
        </div>
    );
}