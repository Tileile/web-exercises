/* data
{
    "sender": "John Smith",
    "message": "Great session on React components! I found the examples very helpful.",
    "rating": 5
  }

*/
let feedbackArray = [];
let nextId = 1;

function getAll(){
    return feedbackArray;g
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating){
        return false;
    }
    
    const newFeedback = {
        id: nextId++,
        sender, 
        message,
        rating
    }

    feedbackArray.push(newFeedback);
    return newFeedback;
}

function findById(id){
    const numericId = Number(id);
    const feedback = feedbackArray.find((item) => item.id === numericId);
    if (feedback){
        return feedback;
    }
    else{
        return false;
    }
}

function updateOneById(id, updatedData){
    const feedback = findById(id);

    if(feedback){
        if (updatedData.sender){
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message){
            feedback.message = updatedData.message;
        }
        if (updatedData.rating){
            feedback.rating = updatedData.rating;
        }
        if (updatedData.sender || updatedData.message || updatedData.rating)
            return feedback;
    }
    return false;
}

function deleteOneById(id){
    const feedback = findById(1);
    if (feedback){
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter( (feedback) => feedback.id !== Number(id));
        return feedbackArray.length < initialLength;
    }
    return false;
}


if (require.main === module) {
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOneById called:", 
        updateOneById(1,{message:"Good pair programming session!"}));


    console.log("findById:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));

}

Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
}

module.exports = Feedback;