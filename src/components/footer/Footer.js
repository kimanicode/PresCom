import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 1 0 25%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex: 1 0 50%;
  }

  @media screen and (max-width: 480px) {
    flex: 1 0 100%;
  }
`;

const Heading = styled.h4`
  color: #0077cc;
  font-weight: bold;
`;

const Text = styled.p`
  color: #fff;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    display:flex;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  
  @media screen and (max-width: 768px) {
    display:flex;
    
  }

  @media screen and (max-width: 480px) {
    display:flex;
  }
`;

const Link = styled.a`
  color: #fff;

  &:hover {
    color: #f2f2f2;
  }
`;

const Icon = styled.i`
  font-size: 24px;
  margin-right: 5px;
  @media screen and (max-width: 768px) {
    margin-right: 5px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <Heading>Prescom</Heading>
            <Text>Your trusted partner in networking <br></br>and telecommunications.</Text>
          </Col>
          <Col>
            <Heading>Connect with us</Heading>
            <List className="list-inline">
              <ListItem>
                <Link href="#">
                  <Icon className="fab fa-facebook" />
                  <FacebookIcon />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Icon className="fab fa-twitter" />
                  <TwitterIcon />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Icon className="fab fa-instagram" />
                  <InstagramIcon/>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Icon className="fab fa-instagram" />
                  <WhatsAppIcon/>
                </Link>
              </ListItem>
            </List>
          </Col>
          <Col>
            <Heading>Quick Links</Heading>
            <List className="list-unstyled">
              <ListItem>
                <Link>About Us</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Our Services</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Contact Us</Link>
              </ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text className="text-center">&copy; 2023 Prescom. All rights reserved.</Text>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
