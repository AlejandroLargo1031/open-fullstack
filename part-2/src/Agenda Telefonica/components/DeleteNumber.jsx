import serviceAgenda from "../../services/agenda"

export const DeleteNumber = (props) => {
    const {setPerson, person, id, text} = props
    console.log(id)

    const delteNum = () => {
        const number = person.filter((n) => n.id === id)
        serviceAgenda.deleteNumber(id, number).then(returnDelete => {
            setPerson(person.map((n) => n.id !== id ? n : returnDelete))
        })
    }

    return (
        <>
        <button onClick={delteNum} >{id}{text}</button>
        </>
    )
}