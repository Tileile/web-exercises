const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app"); // Your Express app
const api = supertest(app);
const Job = require("../models/jobModel");
const User = require("../models/userModel");

const jobs = [{
    "title": "matin 2 työ ",
    "type": "Job type 35",
    "description": "Job description 13",
    "company": {
        "name": "Company 5",
        "contactEmail": "email1@gmail.com",
        "contactPhone": "012345678"
    }
},
{
    "title": "evening job",
    "type": "Job type 36",
    "description": "Job description 14",
    "company": {
        "name": "Company 6",
        "contactEmail": "email2@gmail.com",
        "contactPhone": "987654321"
    }
}
]

describe("Job Controller", () => {

    let token = null;

    beforeAll(async () => {
        await User.deleteMany({});
        const result = await api.post("/api/users/signup").send({
            name: "John Doe",
            email: "john@example.com",
            password: "R3g5T7#gh",
            phone_number: "1234567890",
            gender: "Male",
            date_of_birth: "1990-01-01",
            membership_status: "Inactive",
        });
        token = result.body.token;
    });

    afterAll(() => {
        mongoose.connection.close();
    });

    describe("Given there are initially some jobs saved", () => {
        beforeEach(async () => {
            await Job.deleteMany({});
            await Promise.all([
                api
                    .post("/api/jobs")
                    .set("Authorization", "bearer " + token)
                    .send(jobs[0]),
                api
                    .post("/api/jobs")
                    .set("Authorization", "bearer " + token)
                    .send(jobs[1]),
            ]);
        });
        it("should return all jobs as JSON when GET /api/jobs is called", async () => {
            const response = await api
                .get("/api/jobs")
                .set("Authorization", "bearer " + token)
                .expect(200)
                .expect("Content-Type", /application\/json/);
    
            expect(response.body).toHaveLength(jobs.length);
        });
        
    it("should create a new job when POST /api/jobs is called", async () => {
        const newJob = {
            "title": "morning job",
            "type": "Job type 37",
            "description": "Job description 15",
            "company": {
                "name": "Company 7",
                "contactEmail": "user@email.com",
                "contactPhone": "123456789"
            }
        };

        const response = await api
            .post("/api/jobs")
            .set("Authorization", "bearer " + token)
            .send(newJob)
            .expect(201)
            .expect("Content-Type", /application\/json/);

        const jobsAfterPost = await Job.find({});
        expect(jobsAfterPost).toHaveLength(jobs.length + 1);
        const jobTitles = jobsAfterPost.map((job) => job.title);
        expect(jobTitles).toContain(newJob.title);
    });
    
    it("should return one job by ID when GET /api/jobs/:id is called", async () => {
        const job = await Job.findOne();
        await api
            .get(`/api/jobs/${job._id}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });

    it("should return 404 for a non-existing id", async () => {
        const nonExistentId = new mongoose.Types.ObjectId();
        await api
            .get(`/api/jobs/${nonExistentId}`)
            .expect(404);
    });

    it("should delete a job by ID when DELETE /api/jobs/:id is called", async () => {
        const job = await Job.findOne();
        await api
            .delete(`/api/jobs/${job._id}`)
            .set("Authorization", "bearer " + token)
            .expect(204);

        const jobsAfterDelete = await Job.find({});
        expect(jobsAfterDelete).toHaveLength(jobs.length - 1);
    });

    it("should return 404 for a non-existing id when DELETE /api/jobs/:id is called", async () => {
        const nonExistentId = new mongoose.Types.ObjectId();
        await api
            .delete(`/api/jobs/${nonExistentId}`)
            .set("Authorization", "bearer " + token)
            .expect(404);
    })


    it("should update one job with partial data when PUT /api/jobs/:id is called", async () => {
        const job = await Job.findOne();
        const updatedJob = {
            title: "Updated title",
            type: "Updated type",
            description: "Updated description",
        }
        await api
            .put(`/api/jobs/${job._id}`)
            .set("Authorization", "bearer " + token)
            .send(updatedJob)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        const updatedJobCheck = await Job.findById(job._id);
        expect(updatedJobCheck.title).toBe(updatedJob.title);
        expect(updatedJobCheck.type).toBe(updatedJob.type);
        expect(updatedJobCheck.description).toBe(updatedJob.description)
    });

    it("should return 404 for an invalid id when PUT /api/jobs/:id is called", async () => {
        const nonExistentId = new mongoose.Types.ObjectId();
        await api
            .put(`/api/jobs/${nonExistentId}`)
            .set("Authorization", "bearer " + token)
            .send({})
            .expect(404);
    })
    


    });
});