export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
//this way type of actionis not hardcoded

//this is action creator: function that returns an action
export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}

//this is the best structure for action creators!
//it is the best practice to stick to this structure

//it is good practice to add separate actions into separate folder and files!
