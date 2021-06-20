import { getChildrenByType } from 'react-nanny';
import styled, { css } from 'styled-components';

const NavBar = styled.ul`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;

    margin: 0;

    background-color: lightgray;

    display: flex;
    flex-direction: row;
    list-style: none;
`;

const NavItem = styled.li`
    padding: 0 1rem;
    background-color: white;
    margin: 0 0.5rem;

    ${({active}) => active && css`
        font-weight: bold;
    `}
`;

const NavTitle = styled.span`
    font-weight: bold;
`;

export default function Nav({ children }) {
    const items = getChildrenByType(children, [Nav.Item]);
    const itemsData = items.map(item => ({
        href: item.props.href,
        name: item.props.name,
        isActive: item.props.active ?? false
    }));

    console.log(items.map(item => item.props));

    // FIXME: could be done inside itemsData init
    const activeItem = itemsData.find(item => item.isActive);
    const title = activeItem?.name ?? 'the title';

    const navItems = itemsData.map(({ href, name }, i) => (
        <NavItem key={i.toString()}>
            <a href={href}>
                {name}
            </a>
        </NavItem>
    ));

    return (
        <NavBar>
            <NavTitle> {title} </NavTitle>

            {navItems}
        </NavBar>
    );
}

Nav.Item = () => null;

Nav.Spacing = () => (
    <div className={styles.navSpacing}></div>
);