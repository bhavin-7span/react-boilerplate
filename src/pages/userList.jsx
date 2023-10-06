import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../services/user";

const UserList = () => {
  const { data: userData, isFetching } = useGetUsersQuery();
  const users = useSelector((state) => state?.user?.userList);
  console.log("userData", userData, isFetching);
  console.log("users", users);
  return (
    <>
      <div className="bg-white p-4 rounded-md mt-6 h-[570px] overflow-auto">
        User Name: {users[0].name}
      </div>
    </>
  );
};

export default UserList;
