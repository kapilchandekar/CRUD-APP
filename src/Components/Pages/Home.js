import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUsersStart, delUserData } from "../Redux/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { users } = useSelector((state) => state.data);
  const { isFilter } = useSelector((state) => state.data);
  const { filterUser } = useSelector((state) => state.data);
  const { loading } = useSelector((state) => state.data);
  console.log("Allusers", users);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  const handleDelete = (data) => {
    if (window.confirm("are you wanted to delete this user ?")) {
      dispatch(delUserData(data._id));
    }
  };
  const handleEdit = (data) => {
    navigator(`/EditUser/${data._id}`, { state: { currentUser: data } });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6 mt-4 overflow-auto">
        <table class="table  table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th scope="col">Name</th>
              <th scope="col">Dob</th>
              <th scope="col">Gender</th>
              <th scope="col" colspan="4">
                Bio
              </th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? (
                <tr>
                  <td className="text-center " scope="col" colspan="12">
                    <div class="spinner-border text-light text-center" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                  </td>
                </tr>

              ) :
                <>
                  {!isFilter
                    ? users.map((items, index) => (
                      <tr key={items._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{items.FullName}</td>
                        <td>{items.Dob}</td>
                        <td>{items.Gender}</td>
                        <td>{items.BioData}</td>
                        <td>
                          <button
                            onClick={() => handleEdit(items)}
                            class="btn btn-outline-success py-0"
                            type="button"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            class="btn btn-outline-danger py-0"
                            onClick={() => handleDelete(items)}
                            type="button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                    : filterUser.map((items, index) => (
                      <tr key={items._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{items.FullName}</td>
                        <td>{items.Dob}</td>
                        <td>{items.Gender}</td>
                        <td>{items.BioData}</td>
                        <td>
                          <button
                            onClick={() => handleEdit(items)}
                            class="btn btn-outline-success py-0"
                            type="button"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            class="btn btn-outline-danger py-0"
                            onClick={() => handleDelete(items)}
                            type="button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}




                </>

            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
