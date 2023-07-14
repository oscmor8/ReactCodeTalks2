import React from "react";

function Avatar() {
  const user = {
    name: "Christopher Robin",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6YMQLTJQKHu_ptClOW3VNFTP1KRLYSuTAmCe8JN1bKRL42b2AemxD_jp-b8s7cl3r_o&usqp=CAU",
    imageSize: 90,
  };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <img src={user.imageUrl} alt="christopher-robin" width={user.imageSize} />
    </div>
  );
}

export default Avatar;
