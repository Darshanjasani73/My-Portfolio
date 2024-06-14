import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 740px) {
      grid-template-columns: 1fr;
    }

    .project {
      padding: 2rem 1rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
  &:hover {
        transform: translateY(-5px);
        background-color: #FF751f; /* Orange color */
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 1.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* Adjust gap as needed */
        }

        @media (max-width: 480px) {
          /* Adjust styles for smaller devices */
          flex-direction: column; /* Stack links vertically */
          align-items: flex-start; /* Align links to the left */
        }

        a > img {
          width: 3rem;
        }
      }

      .body {
        h3 {
          margin-bottom: 1rem;
        }

        p {
          letter-spacing: 0.12rem;
          margin-bottom: 1rem;

          a {
            color: #fff;
            border-bottom: 1px solid var(--green);
            transition: color 0.25s;

            &:hover {
              color: var(--green);
            }
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }
`;
