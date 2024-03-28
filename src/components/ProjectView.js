import Background from "./Background"

export default function ProjectView(props) {
    return (
        <Background>
            <div className="projectView">
                <div className="imageContainer">
                    {
                        (props?.video) && (
                            <video controls>
                                <source src={props?.video} type="video/mp4"></source>
                            </video> 
                        )
                    }
                    {
                        props.images?.map((e, i) => <img key={i} src={e.src} alt={e.alt} /> )
                    }
                </div>
                <div className="descriptionContainer">
                    <h1> { props.title } </h1>
                    { props.description }
                </div>
            </div>
        </Background>
    );
}
