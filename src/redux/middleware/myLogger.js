import rootReducer from "../rootReducer"

export const myLogger=(store)=>(next)=>(action)=>{
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Current Sate: ${JSON.stringify(store.getState())}`)
    const upcomingState=[action].reduce(rootReducer,store.getState())
    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`)

    /// Pass Action
    return next(action)

}