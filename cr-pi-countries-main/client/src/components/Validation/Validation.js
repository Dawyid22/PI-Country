const validation = (activity) =>{

    const errors = {}

    if (!activity.name){
        errors.name === "The activity name field must be filled in."
    }

    if(activity.name.length > 20){
        errors.name = "Only 20 characters are permitted."
    }

    if(activity.difficulty === "Default"){
        errors.difficulty = "You have to choose the difficulty from 1 to 5."
    }

    if(activity.season == "Default"){
        errors.season = "You must choose a season."
    }

    return errors
}

export default validation