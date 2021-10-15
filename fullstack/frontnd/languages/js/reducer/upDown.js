const inis=0
const changeno=(state=inis,action)=>{

    switch(){
        case "in":return state+1
        case "de":return state-1
        default :return state
    }
}
export default changeno