let tourArray = [];
let nextId = 1;

function getAll() {
    return tourArray;
}

function addOne(name, info, image, price) {
    // Check for required fields
    if (!name || !info || !image || !price) {
        return false;
    }
    
    const newTour = {
        id: nextId++,
        name,
        info,
        image,
        price
    }

    tourArray.push(newTour);
    return newTour;
}

function findById(id) {
    const numericId = Number(id);
    const tour = tourArray.find((item) => item.id === numericId);
    if (tour) {
        return tour;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const tour = findById(id);

    if (tour) {
        if (updatedData.name) {
            tour.name = updatedData.name;
        }
        if (updatedData.info) {
            tour.info = updatedData.info;
        }
        if (updatedData.image) {
            tour.image = updatedData.image;
        }
        if (updatedData.price) {
            tour.price = updatedData.price;
        }

        if (updatedData.name || updatedData.info || updatedData.image || updatedData.price) {
            return tour;
        }
    }
    return false;
}

function deleteOneById(id) {
    const tour = findById(id);
    if (tour) {
        const initialLength = tourArray.length;
        tourArray = tourArray.filter((tour) => tour.id !== Number(id));
        return tourArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {
    let result = addOne("Best of Paris in 7 Days Tour", "Paris is synonymous with the finest things that culture can offer...", "https://www.course-api.com/images/tours/tour-1.jpeg", "1,995");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOneById called:", 
        updateOneById(1, { info: "Updated tour information!" }));

    console.log("findById:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));
}

const Tours = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
}

module.exports = Tours;
