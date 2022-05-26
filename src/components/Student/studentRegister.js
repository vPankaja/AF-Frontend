import React from "react";

export default function StudentRegister() {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Register Student</h5>
                    <form>
                        <div class="mb-3">
                            <label for="studentName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="studentName"/>
                        </div>
                        <div class="mb-3">
                            <label for="studentAge" class="form-label">Age</label>
                            <input type="Number" class="form-control" id="studentAge"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}