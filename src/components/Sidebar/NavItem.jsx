function NavItem({ label, view, selectedView, onViewChange }) {
    return (
        <li
            className={selectedView === view ? "active" : ""}
            onClick={() => onViewChange(view)}
        >
            {label}
        </li>
    );
}

export default NavItem;