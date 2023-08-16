const validation = (activity) =>{

    const errors = {}

    if (activity.name.length == 0){
        errors.name = "The activity name field must be filled in."
    }

    if(activity.name.length > 20){
        errors.name = "Only 20 characters are permitted."
    }

    if(activity.difficulty == ""){
        errors.difficulty = "You have to choose the difficulty from 1 to 5."
    }

    if(activity.season == ""){
        errors.season = "You must choose a season."
    }

    return errors
}

export default validation