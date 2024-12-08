export const createJob = async (newJob) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user ? user.token : null;
    try {
        const response = await fetch('/api/jobs',
            {
                method: "POST",
                headers: { "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                 },
                body: JSON.stringify(newJob),
            })
        if (!response.ok) {
            throw Error("Failed to add new job")
        }
        const data = response.json()
        return response
    } catch (err) {
        console.error(err.message)
        return false;
    }
}

export const deleteJob = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user ? user.token : null;
    try {
        const res = await fetch(`/api/jobs/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            },
        )
        if (!res.ok) {
            throw Error("Deletion failed")
        }
    } catch (err) {
        console.log(err.message)
    }
}

export const updateJob = async (id, job) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user ? user.token : null;
    try {
        const res = await fetch(`/api/jobs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(job),
        })
        if (!res.ok) {
            throw Error("Updating job failed")
        }
        const data = await res.json()
        return data
    } catch (err) {
        console.error(err.message)
        return false
    }
}