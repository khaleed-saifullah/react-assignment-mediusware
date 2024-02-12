import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setName("");
    setStatus("");
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const tempData = [...data];
    tempData.push({
      name,
      status,
    });
    setData(tempData);
  };

  const handleClick = (val) => {
    setShow(val);
  };

  function filterTasks() {
    let filterData = [];
    if (show == "all") {
      filterData = [...data.filter((item) => item.status === "active")];
      filterData = [
        ...filterData,
        ...data.filter((item) => item.status === "completed"),
      ];
      filterData = [
        ...filterData,
        ...data.filter(
          (item) => item.status !== "completed" && item.status !== "active"
        ),
      ];
      return filterData.map((item, index) => {
        return (
          <tr>
            <th scope="col">{item.name}</th>
            <th scope="col">{item.status}</th>
          </tr>
        );
      });
    } else {
      filterData = data.filter((item) => item.status === show);
      return filterData.map((item, index) => {
        return (
          <tr>
            <th scope="col">{item.name}</th>
            <th scope="col">{item.status}</th>
          </tr>
        );
      });
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
                value={status}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>{filterTasks()}</thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
