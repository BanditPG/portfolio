import { Link } from 'react-router-dom';

export default function Project({href, children}) {
    return (
        <Link to={href}>
            <div className="projectTile">
                { children }
            </div>
        </Link>
    )
}