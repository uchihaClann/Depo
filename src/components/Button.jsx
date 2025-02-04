import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <a href="https://github.com/PatellAbhishekk?tab=repositories" target="_blank">
      <StyledWrapper>
        <button className="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
          </svg>
          More Projects
        </button>
      </StyledWrapper>
    </a>
  );
};

const StyledWrapper = styled.div`
  /* inspired from this svgbackgrounds.com/ */
  .button {
    width: fit-content;
    display: flex;
    padding: 0.8em 1.1em;
    gap: 0.4rem;
    border: none;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
    background: linear-gradient(
        15deg,
        #880088,
        #aa2068,
        #cc3f47,
        #de6f3d,
        #f09f33,
        #de6f3d,
        #cc3f47,
        #aa2068,
        #880088
      )
      no-repeat;
    background-size: 300%;
    background-position: left center;
    transition: background 0.3s ease;
    color: #fff;
  }

  .button:hover {
    background-size: 320%;
    background-position: right center;
  }

  .button:hover svg {
    fill: #fff;
  }

  .button svg {
    width: 23px;
    fill: #f09f33;
    transition: 0.3s ease;
  }
`;

export default Button;
