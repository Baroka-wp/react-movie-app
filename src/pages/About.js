import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation />
            <hr />
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Coach career</span>{' '}
                <span className="block text-indigo-600 xl:inline">Boost your career
                </span>
            </h1>
            <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Magni illum distinctio dicta
                id optio aliquid nam voluptates,
                assumenda incidunt! Animi sunt nostrum esse inventore doloribus excepturi
                nemo praesentium saepe et.
            </p>
        </div>
    );
};

export default About;