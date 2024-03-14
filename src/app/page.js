import MirrorImage from "../../components/MirrorImage";

function Home() {
    return (
        <>
            <div className="bg-neutral-900 h-[300vh] w-full text-white">
                <div className="bg-neutral-500 p-5">
                    <h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis sequi distinctio harum
                        odio, consectetur magni nobis facilis aspernatur placeat.
                    </h1>
                    <ul className="mt-5">
                        <li>
                            <h1 className=" p-5 mt-[140px] text-[80px] font-bold text-white bg-purple-500">
                                Hello Word &nbsp;👌
                            </h1>
                        </li>
                    </ul>
                </div>
            </div>
            <MirrorImage />
        </>
    );
}

export default Home;
