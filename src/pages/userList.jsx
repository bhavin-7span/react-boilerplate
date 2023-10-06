import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state?.user?.userList);
  console.log("users", users);
  return (
    <>
      <div className="bg-white p-4 rounded-md mt-6 h-[570px] overflow-auto">
        User list
      </div>
    </>
  );
};

export default UserList;
