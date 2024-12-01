const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;



const workoutsInDb = async () => {
  const workouts = await Workout.find({});
  return workouts.map((workout) => workout.toJSON());
};

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});


describe("Workout API", function () {
  describe("when there is initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[0])
        .send(workouts[1]);
    });
    describe("GET /api/workouts", function () {
      test("Workouts are returned as json", async () => {
        await api
          .get("/api/workouts")
          .set("Authorization", "bearer " + token)
          .expect(200)
          .expect("Content-Type", /application\/json/);
      });

    })
    describe("POST /api/workouts", () => {
      test("New workout added successfully", async () => {
        const newWorkout = {
          title: "testworkout",
          reps: 10,
          load: 100,
        };
        await api
          .post("/api/workouts")
          .set("Authorization", "bearer " + token)
          .send(newWorkout)
          .expect(201);
      });
    })
    describe("DELETE /api/workouts", () => {
      test("Deletes a workout successfully", async () => {
        // Fetch all workouts in the database
        const initialWorkouts = await workoutsInDb();
        console.log(initialWorkouts)
        const workoutToDelete = initialWorkouts[0];

        // Perform DELETE request
        await api
          .delete(`/api/workouts/${workoutToDelete._id}`)
          .set("Authorization", "bearer " + token)
          .expect(200);

        // Verify the workout is no longer in the database
        const workoutsAfterDeletion = await workoutsInDb();
        expect(workoutsAfterDeletion).toHaveLength(initialWorkouts.length - 1);
        const ids = workoutsAfterDeletion.map((w) => w.id);
        expect(ids).not.toContain(workoutToDelete.id);
      });
    })
    describe("PATCH /api/workouts", () => {
      test("Updates workout succesfully", async () => {
        const initialWorkouts = await workoutsInDb();
        const workoutToUpdate = initialWorkouts[0];
        console.log(initialWorkouts[0])

        const update = {
          title: "testworkout",
          reps: 20,
          load: 200,
        };
        const updatedWorkout = await api
          .patch(`/api/workouts/${workoutToUpdate._id}`)
          .set("Authorization", "bearer " + token)
          .send(update)
          .expect(200)
          .expect("Content-Type", /application\/json/);
          console.log(updatedWorkout)

      })
    })
  });
})

afterAll(() => {
  mongoose.connection.close();
});
