import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handlePrevPage = () => {
    navigate("/profile");
  };
  const handleInputChange = () => {};
  return (
    <div>
      <button className="button-premium" onClick={handlePrevPage}>
        Back
      </button>
      <form className="edit-form">
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="control"
            value={state.email}
          />
        </div>
        <div className="username">
          <label>Age</label>
          <input
            type="text"
            name="age"
            className="control"
            value={state.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="username">
          <label>Work</label>
          <input
            type="text"
            name="work"
            className="control"
            value={state.work}
            onChange={handleInputChange}
          />
        </div>
        <div className="username">
          <label>Bio</label>
          <input
            type="text"
            name="work"
            className="control"
            value={state.bio}
            onChange={handleInputChange}
          />
        </div>
        <div className="username">
          <label>Gender</label>
          <input
            type="text"
            name="work"
            className="control"
            value={state.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Editprofile;
