import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const PostBtnWrapper = styled.div`
   position: sticky;
   right: 0;
   bottom: 0;
`;

export const PostBtn = styled.aside`
   position: absolute;
   right: 30px;
   bottom: 90px;
   cursor: pointer;
   & > img {
      width: 2.8125rem;
      height: 2.8125rem;
   }
`;

const Aside = () => {
   const navigate = useNavigate();
   return (
      <PostBtnWrapper>
         <PostBtn onClick={() => navigate('/post')}>
            <img src="post-btn.png" alt="포스트 작성하러 가기" />
         </PostBtn>
      </PostBtnWrapper>
   );
};

export default Aside;
