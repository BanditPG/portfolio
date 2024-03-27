import { Link } from 'react-router-dom';

const Project = (props) => {
    return (
        <Link to={props.href}>
            <div className="projectTile">
                { props.children }
            </div>
        </Link>
    )
}

export default Project;