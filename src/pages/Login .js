import React from 'react'
import { useNavigate  } from 'react-router-dom'

const Login  = () => {
    const navigate = useNavigate()

    const updateRecord = async () => {
        navigate('/SignUp' )
    }

  return (
    <div class="container" style={{ marginLeft: '200px' }}>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mt-5">
                <div class="card-header">
                    <h3 class="text-center">Login</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                        <button type="submit" class="btn btn-danger w-20 mt-4 ml-20"onClick={()=> updateRecord()} >SignUp</button>
                    </form>
                </div>
                <div class="card-footer text-center">
                    <small>&copy; 2024 JS Motors</small>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login 