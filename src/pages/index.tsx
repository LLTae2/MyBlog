import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/common/Footer'
import CategoryList from 'components/Main/CategoryList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 3,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList categoryList={CATEGORY_LIST} selectedCategory="web" />
      <Footer />
    </Container>
  )
}

export default IndexPage
