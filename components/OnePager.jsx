import { getChildrenByType } from "react-nanny";
import Nav from "./Nav";
import styled from 'styled-components';
import { InView } from "react-intersection-observer";
import { useEffect, useState } from 'react';

const PageContainer = styled.div`
    padding: 1rem;
`;

const PageItem = styled.div`
    min-height: 100vh;
`;


export function OnePager({ children }) {
    const pageItems = getChildrenByType(children, [Page]);
    
    const pagesData = pageItems.map(child => ({
        content: child.props.children,
        title: child.props.title,
        id: child.props.title
    }));

    
    let [ activePageId, setActivePageId ] = useState();
    useEffect(() => {
        console.log("changed to ", activePageId);
    }, [activePageId]);

    const pages = pagesData.map(({ id, content }) => (
            <InView as="div" onChange={inView => inView && setActivePageId(id) || console.log(inView, id, content)} threshold={0.7}>
                <PageItem id={id}>
                    {content}
                </PageItem>
            </InView>
        )
    );


    const navItems = pagesData.map(({ title, id }) => (
        <Nav.Item name={title} href={'#' + id} active={activePageId === id} />
    ));

    return (
        <div>
            <Nav>
                {navItems}
            </Nav>

            <PageContainer>
                {pages}
            </PageContainer>
        </div>
    )
}

export const Page = () => null;