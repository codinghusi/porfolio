import { getChildrenByType } from "react-nanny";


export default function Test() {
    return (
        <Container>
            <Item> 1 </Item>
            <Item> 2 </Item>
            <p> Hide me </p>
            <p> Hide me </p>
            <Item> 3 </Item>
            <Item> 4 </Item>
        </Container>
    );
}

function Container({ children }) {
    const items = getChildrenByType(children, [Item]);
    return items;
}

function Item({ children }) {
    return children;
}