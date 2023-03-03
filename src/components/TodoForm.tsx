import { useRef } from "react"

interface TodoFormProps {
    updateTodoList : (data: string) => void
}

export const TodoForm = ({updateTodoList}: TodoFormProps) => {
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e : React.SyntheticEvent ) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            todo: {value: string, name: string}
          };
          updateTodoList(target.todo.value)
    }

    return <form onSubmit={handleSubmit} ref={formRef} className="flex justify-center">
        <input name="todo" required placeholder="Add Todo..."/>
        <button>Submit</button>
    </form>
}