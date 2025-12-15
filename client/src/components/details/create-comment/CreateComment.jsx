import { useState } from "react";
import { useParams } from "react-router";
import request from "../../../utils/request"

export default function CreateComment({
    user,
}) {
    const { gameId } = useParams()
    const [comment, setComment] = useState('');
    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        await request('/comments', 'POST', {
            author: user.email,
            message: comment,
            gameId,
        })
    }

    return (
        < article className="create-comment" >
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea
                    name="comment"
                    onChange={changeHandler}
                    value={comment}
                    placeholder="Comment......">
                </textarea>
                <input
                    className="btn submit"
                    type="submit"
                    disabled={!user}
                    value="Add Comment" />
            </form>
        </article >
    )
}