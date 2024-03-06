import React from "react";
import styled from "styled-components";

export default function Work({ title, body, tags }) {
  return (
    <>
      <StyledCard>
        <div class="card">
          <div class="main-content">
            <div class="header">
              <span>{title}</span>
            </div>
            <p class="heading">{body}</p>
            <div class="categories">
              <span>{tags}</span>
            </div>
          </div>
          <div class="footer">by myportfolio</div>
        </div>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  .card {
    width: 320px;
    height: 350px;
    padding: 20px;
    color: white;
    background:
      linear-gradient(#212121, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .main-content {
    flex: 1;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
  }

  .card .categories {
    display: flex;
    gap: 8px;
  }

  .card .categories span {
    background-color: #e81cff;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }
`;
