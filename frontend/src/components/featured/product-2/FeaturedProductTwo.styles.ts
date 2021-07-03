import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  height: 20rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  .product-image {
    background-image: url('assets/images/home/mobile/image-speaker-zx7.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
  }

  article {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);

    h4 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .product-image {
      background-image: url('assets/images/home/tablet/image-speaker-zx7.jpg');
    }

    article {
      left: 3.875rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .product-image {
      background-image: url('assets/images/home/desktop/image-speaker-zx7.jpg');
    }

    article {
      left: 5.9375rem;
    }
  }
`;
