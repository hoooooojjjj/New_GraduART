import React from "react";
import {
    Head,
    Logo,
    TextWrapper,
    Span,
    Circle,
    Group,
    Ellipse,
    Ellipse2,
    Ellipse3
} from './DepartmentHeaderStyle'; // Adjust the path as necessary

export const DepartmentHeader = () => {
    return (
        <Head>
            <Logo>
                <TextWrapper>snu graduart </TextWrapper>
                <Span>| 서울대학교 졸업전시 작품 전시 ・ 판매</Span>
            </Logo>

            <Circle>
                <Group>
                    <Ellipse />
                    <Ellipse2 />
                    <Ellipse3 />
                </Group>
            </Circle>
        </Head>
    );
};