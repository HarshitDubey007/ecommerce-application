import React from 'react'

export default function AccountDetails() {



  return (
    <>
     <div class="card shadow-none mb-0 border">
                            <div class="card-body">
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" value="Madison"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value="Ruiz"/>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Display Name</label>
                                        <input type="text" class="form-control" value="Madison Ruiz"/>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Email address</label>
                                        <input type="text" class="form-control" value="madison.ruiz@gmail.com"/>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Current Password</label>
                                        <input type="text" class="form-control" value="................."/>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">New Password</label>
                                        <input type="text" class="form-control" value="................."/>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Confirm New Password</label>
                                        <input type="text" class="form-control" value="................." />
                                    </div>
                                    <div class="col-12">
                                        <button type="button" class="btn btn-dark btn-ecomm">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
    </>
  )
}
