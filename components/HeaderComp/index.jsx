import {
  Button,
  Column,
  Row,
  VerticalSpacer,
} from "@cred/neopop-web/lib/components";
import styled from "styled-components";
import imgSrc from "/assets/logo.png";

const ContentWrapper = styled.div`
  padding: 20px;
  background-color: #0d0d0d;
`;

const HeaderComp = () => {
  return (
    <ContentWrapper>
      <Column>
        <Row className="v-justify">
          <Column id="logo" className="h-center">
            <img src={imgSrc} width={90} alt="logo" />
          </Column>
          <Column id="nav-links" className="h-center">
            <Row className="h-center">
              <Column>
                <Button
                  variant="primary"
                  kind="link"
                  size="big"
                  colorMode="light"
                  textStyle={(fontSize = 18)}
                >
                  Home
                </Button>
              </Column>
              <VerticalSpacer n={8} />
              <Column>
                <Button
                  variant="primary"
                  kind="link"
                  size="big"
                  colorMode="light"
                  textStyle={(fontSize = 18)}
                >
                  About
                </Button>
              </Column>
              <VerticalSpacer n={8} />
              <Column>
                <Button
                  variant="primary"
                  kind="link"
                  size="big"
                  colorMode="light"
                  textStyle={(fontSize = 18)}
                >
                  Contact
                </Button>
              </Column>
              <VerticalSpacer n={8} />
              <Column>
                <Button
                  variant="primary"
                  kind="link"
                  size="big"
                  colorMode="light"
                  textStyle={(fontSize = 18)}
                >
                  Login
                </Button>
              </Column>
              <VerticalSpacer n={8} />
              <Column>
                <Button
                  variant="primary"
                  kind="flat"
                  size="medium"
                  colorMode="light"
                >
                  Sign up
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </ContentWrapper>
  );
};

export default HeaderComp;
