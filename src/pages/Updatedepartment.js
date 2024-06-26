import {React, useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance';

const Updatedepartment = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const data = location.state.data

  const [dept_name, setdept_name] = useState(data.dept_name)
  const [dept_description, setdept_description] = useState(data.dept_description)
  const [dept_location, setdept_location] = useState(data.dept_location)
  const [dept_budget, setdept_budget] = useState(data.dept_budget)
  const [dept_projects, setdept_projects] = useState(data.dept_projects)
  const [dept_goals, setdept_goals] = useState(data.dept_goals)
  const [makeRecords, setMakeRecords] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"id": data.id,"dept_name":dept_name , "dept_description":dept_description, "dept_location":dept_location , "dept_budget":dept_budget , "dept_projects":dept_projects, "dept_goals":dept_goals}
      
      const response = await axiosInstance.patch(`/hrm/department`, payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        // navigate('/department')
        navigate('/department', {state: {message: 'Department Updated!'}})
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div class='container' style={{ marginLeft: '200px' }}>
      <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Department Name</label>
          <input type="name" class="form-control" id="dept_name" aria-describedby="dept_name"  value={dept_name}
            onChange= {e => setdept_name(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_description" class="form-label">Deptartment Description</label>
          <input type="text" class="form-control" id="dept_description" aria-describedby="model" value={dept_description}
            onChange= {e => setdept_description(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="dept_location" class="form-label">Department location</label>
          <input type="text" class="form-control" id="dept_location" aria-describedby="dept_location" value={dept_location}
            onChange= {e => setdept_location(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_budget" class="form-label">Department Budget</label>
          <input type="text" class="form-control" id="dept_budget" aria-describedby="dept_budget" value={dept_budget}
            onChange= {e => setdept_budget(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_projects" class="form-label">Department Projects</label>
          <input type="text" class="form-control" id="dept_projects" aria-describedby="dept_projects"  value={dept_projects}
            onChange= {e => setdept_projects(e.target.value)} />
        </div>

        <div class="mb-3">
          <label for="dept_goals" class="form-label">Department Goals</label>
          <input type="text" class="form-control" id="dept_goals" aria-describedby="dept_goals"  value={dept_goals}
            onChange= {e => setdept_goals(e.target.value)} />
        </div>


        {/* <select class="form-select" aria-label="Default select example" onChange={e => setMake(e.target.value)}>
        <option selected>Select Make</option>

          { makeRecords ?
            makeRecords.map(item => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
            :
            <option selected>No Records</option>
          }

        </select> */}

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Updatedepartment