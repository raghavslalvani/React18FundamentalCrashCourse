export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana',];
    return <div>
        {names.map((name)=>{
            return <h2 key = {name}>{name}</h2> // Using key prop to uniquely identify each element in the list
        } )}
    </div>
}