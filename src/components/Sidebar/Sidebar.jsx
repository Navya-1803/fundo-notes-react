import NavItem from './NavItem';

function Sidebar() {
    return(
        <aside>
            <ul>
                <NavItem label ="Notes" />
                <NavItem label ="Archive" />
                <NavItem label ="Trash" />
            </ul>
        </aside>
    );
}

export default Sidebar;