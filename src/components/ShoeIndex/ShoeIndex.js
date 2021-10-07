import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <BreadcrumbsWrapper>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
        </BreadcrumbsWrapper>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        {/* <ShoeGrid /> */}
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const BreadcrumbsWrapper = styled.div`
  padding: 14px 12px;
  padding-left: 0;
`;

const LeftColumn = styled.div`
  height: max-content;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;
