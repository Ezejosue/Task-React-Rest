import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
                .then(response => {
                    console.log(response)
                    navigate('/tasks')
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            await createTask(data)
                .then(response => {
                    console.log(response)
                    navigate('/tasks')
                })
                .catch(error => {
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
                        console.log(response)
                        const task = response.data
                        const { title, description } = task
                        // Set the form values
                        setValue('title', title)
                        setValue('description', description)

                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
        fetchTask()
    }, [])

    return (
        <div>
            <h1>Task Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Title" id="title"
                        {...register('title', { required: true })}
                    />
                    {errors.title && <span>Title is required</span>}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea rows="3" placeholder="Description" id="description"
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && <span>Description is required</span>}
                </div>
                <button>Save</button>
                {params.id && <button onClick={async () => {
                    const accept = window.confirm('Are you sure you want to delete this task?')
                    if (accept) {
                        await deleteTask(params.id)
                            .then(response => {
                                console.log(response)
                                navigate('/tasks')
                            })
                            .catch(error => {
                                console.error(error)
                            })
                    }
                }} >Delete Task</button>}
            </form>
        </div>
    );
}