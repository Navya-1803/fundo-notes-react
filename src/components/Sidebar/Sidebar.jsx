import NavItem from "./NavItem";

function Sidebar({ selectedView, onViewChange }) {
    return (
        <aside>
            <ul>
                <NavItem
                    label="Notes"
                    view="notes"
                    selectedView={selectedView}
                    onViewChange={onViewChange}
                />

                <NavItem
                    label="Archive"
                    view="archive"
                    selectedView={selectedView}
                    onViewChange={onViewChange}
                />

                <NavItem
                    label="Trash"
                    view="trash"
                    selectedView={selectedView}
                    onViewChange={onViewChange}
                />
            </ul>
        </aside>
    );
}

export default Sidebar;