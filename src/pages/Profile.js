import React from "react";
import { useParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profileData = {
  srain0626: {
    name: "김은우",
    description: "꼬꼬마 개발자 지망생",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화 주인공",
  },
};

const Profile = () => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조
  const params = useParams();
  const profile = profileData[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
