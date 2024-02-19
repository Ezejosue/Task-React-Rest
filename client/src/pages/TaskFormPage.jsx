import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
                .then(response => {
                    toast.success('Task updated successfully')
                    console.log(response)
                    navigate('/tasks')
                })
                .catch(error => {
                    toast.error('Error updating task')
                    console.error(error)
                })
        } else {
            await createTask(data)
                .then(response => {
                    toast.success('Task created successfully')
                    console.log(response)
                    navigate('/tasks')
                })
                .catch(error => {
                    toast.error('Error creating task')
                    console.error(error)
                })
        }
        navigate('/tasks')


    })

    useEffect(() => {
        async function fetchTask() {
            if (params.id) {
                await getTask(params.id)
                    .then(response => {
                        toast.success('Task fetched successfully')
                        console.log(response)
                        const task = response.data
                        const { title, description } = task
                        // Set the form values
                        setValue('title', title)
                        setValue('description', description)

                    })
                    .catch(error => {
                        toast.error('Error fetching task')
                        console.error(error)
                    })
            }
        }
        fetchTask()
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='uppercase text-center my-8 font-bold'>Task Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Title" id="title"
                        {...register('title', { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg w-full mb-4'
                    />
                    {errors.title && <span>Title is required</span>}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea rows="3" placeholder="Description" id="description"
                        {...register('description', { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg w-full mb-4'

                    ></textarea>
                    {errors.description && <span>Description is required</span>}
                </div>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
                {params.id && <button onClick={async () => {
                    const accept = window.confirm('Are you sure you want to delete this task?')
                    if (accept) {
                        await deleteTask(params.id)
                            .then(response => {
                                toast.success('Task deleted successfully')
                                console.log(response)
                                navigate('/tasks')
                            })
                            .catch(error => {
                                toast.error('Error deleting task')
                                console.error(error)
                            })
                    }
                }}

                    className='bg-red-500 p-3 rounded-lg block w-full mt-3'
                >Delete Task</button>}
            </form>
        </div>
    );
}