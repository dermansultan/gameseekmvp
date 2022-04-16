import styled from "styled-components";
import ResultCard from "./ResultCard";

const Status = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  color: var(--cloud);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Results = ({ apiResult, loading }) => {
  if (loading) {
    return <Status>Loading...</Status>;
  }

  if (apiResult === null) {
    return <Status>A game will display here.</Status>;
  }
  if (apiResult === 404) {
    return <Status>Cannot find that game, try again</Status>;
  }
  return <ResultCard apiResult={apiResult} />;
};

export default Results;
