import styled from "styled-components";
import { Star, Calendar, ExternalLink } from "react-feather";

const Card = styled.div`
  max-width: 964px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .imgWrapper {
    position: relative;
    padding-bottom: 100%;
    width: 100%;
    img {
      border-radius: 25px;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
    }
  }
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 19px;
  box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
  padding: 19px 20px 30px;
  background-color: var(--noir);
  hr {
    margin: 0;
    border: 1px solid rgba(241, 242, 246, 0.1);
    height: 0px;
    width: 100%;
  }
  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 37px;
  }
  p {
    margin: 0;
    letter-spacing: -0.02em;
    font-size: 14px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
`;

const Rating = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 4px;
  height: 25px;
  color: var(--skyBlue);
  border: 1px solid;
  border-radius: 20px;
  svg {
    width: 11px;
    height: auto;
  }
`;

const WebsiteLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 43px;
  background: var(--barney);
  border-radius: 10px;
  box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  font-size: 14px;
  color: var(--frostWhite);
  svg {
    margin-left: 10px;
    width: 15px;
    height: auto;
  }
`;

const Release = styled.div`
  padding: 0 15px;
  display: flex;
  gap: 8px;
  height: 25px;
  color: var(--chiefGreen);
  border: 1px solid;
  border-radius: 20px;
  svg {
    width: 11px;
    height: auto;
  }
`;

const ResultCard = ({ apiResult }) => {
  return (
    <Card>
      <div className="imgWrapper">
        <img src={apiResult.background_image} />
      </div>
      <ContentCard>
        <h2>{apiResult.name}</h2>
        <hr></hr>
        <DetailsContainer>
          <Rating>
            <Star />
            {apiResult.metacritic || "No Rating Available"}
          </Rating>
          <Release>
            <Calendar />
            {apiResult.released || "No Release Date Available"}
          </Release>
        </DetailsContainer>
        <hr></hr>
        <p dangerouslySetInnerHTML={{ __html: apiResult.description }}></p>
        {apiResult.website && (
          <WebsiteLink href={apiResult.website} target="_blank">
            Developer Site <ExternalLink />
          </WebsiteLink>
        )}
      </ContentCard>
    </Card>
  );
};

export default ResultCard;
