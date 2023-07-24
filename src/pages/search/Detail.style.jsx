import styled from 'styled-components';

// header
export const Header = styled.div`
   max-width: 26.25rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 2px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};
   z-index: 10;

   @media screen and (max-width: 419px) {
      width: 100vw;
   }
`;

export const HeaderBackBtn = styled.div`
   position: absolute;
   top: 1.2rem;
   left: 0.875rem;

   & > svg {
      user-select: none;
   }
`;

export const HeaderTitle = styled.h1`
   font-size: 1.25rem;
   font-weight: 500;
`;

// Detail
export const DetailWrapper = styled.section`
   max-width: 26.25rem;
   width: 26.25rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 4.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      width: 100vw;
      padding: 4.375rem 1rem;
   }
`;

export const DetailItem = styled.div`
   display: flex;
   align-items: center;
   padding: 1.37rem 0;
   margin-bottom: 1.25rem;
   border-bottom: 1px solid #bec2c2;

   img {
      width: 7rem;
      height: 6.4375rem;
      object-fit: contain;
   }
`;

export const Item = styled.div`
   display: flex;
   flex-direction: column;
   width: 16.25rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ItemTitle = styled.strong`
   color: ${props => props.theme.palette.gray};
   font-size: 1.2rem;
   font-style: normal;
   font-weight: 600;
   line-height: 150%;
   letter-spacing: -0.02375rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ItemAuthor = styled.p`
   color: ${props => props.theme.palette.gray};
   font-size: 0.9rem;
   font-style: normal;
   font-weight: 300;
   line-height: 1.05rem;
   letter-spacing: -0.015rem;
`;

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Info = styled.span`
   display: flex;
   align-items: center;
   color: ${props => props.theme.palette.black};
   font-size: 1.1rem;
   font-weight: 600;
   padding-bottom: 1.06rem;

   &::before {
      display: inline-block;
      content: '';
      background-image: url(${props => props.img});
      background-size: contain;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.31rem;
   }
`;

export const InfoDescription = styled.p`
   display: -webkit-box;
   -webkit-line-clamp: 5;
   -webkit-box-orient: vertical;
   line-height: 1.4rem;
   overflow: hidden;
   text-overflow: ellipsis;
`;
