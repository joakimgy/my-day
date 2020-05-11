import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div>
        <div
          style={{
            background: `url(https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png)  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <div>
          <h2>Ronald</h2>
          <h3>test@gmail.com</h3>
        </div>
      </div>
      <button>Sign out</button>
    </div>
  );
};
export default ProfilePage;
