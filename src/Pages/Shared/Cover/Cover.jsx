import { Parallax } from 'react-parallax';

const Cover = ({ img, title, heading }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}

            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero md:h-[500px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{heading}</p>

                    </div>
                </div>
            </div>
            {/* <div style={{ height: '200px' }} /> */}
        </Parallax >

    );
};

export default Cover;