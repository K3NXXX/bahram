import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updatePost } from "../../redux/slices/posts/postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import { toast } from "react-toastify";
import axios from "axios";
import style from "./EditPost.module.scss";
import img1 from "../../assets/images/addPost/img1.jpg";
import img2 from "../../assets/images/addPost/img2.jpg";
import img3 from "../../assets/images/addPost/img3.jpg";
import img4 from "../../assets/images/addPost/img4.jpg";

export const EditPost: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [newImage, setNewImage] = useState<File | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`/posts/${id}`);
                console.log(data);
                setTitle(data.title);
                setTitle(data.text);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPost();
    }, [id]);
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const updatedPost = new FormData();
            updatedPost.append("title", title);
            updatedPost.append("text", text);
            updatedPost.append("type", type);
            if (id) {
                updatedPost.append("id", id);
            }
            if (newImage !== null) {
                if (newImage.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        if (event.target) {
                            const img = new Image();
                            img.src = event.target.result as string;
                            img.onload = () => {
                                if (img.width >= 200) {
                                    updatedPost.append("image", newImage);
                                    dispatch(updatePost(updatedPost));
                                    toast.success("Post edited successfully");
                                    navigate(HOME_ROUTE);
                                } else {
                                    toast.error(
                                        "The uploaded image must have a minimum width of 200 pixels."
                                    );
                                }
                            };
                        }
                    };
                    reader.readAsDataURL(newImage);
                } else {
                    toast.error("Please select a valid image file.");
                }
            } else {
                toast.error("Please select an image file.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClearData = () => {
        setTitle("");
        setText("");
        setNewImage(null);
    };

    return (
        <div className={style.bg}>
            <div className={style.root}>
                <h5 className={style.root__title}>Editing Post</h5>

                <form onSubmit={submitHandler}>
                    <textarea
                        required
                        value={title}
                        className={style.title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        required
                        value={text}
                        className={style.text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Text"
                    />
                    <select
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="" disabled>
                            Choose a post type
                        </option>
                        <option value="Essentials">Essentials</option>
                        <option value="UX Design">UX Design</option>
                        <option value="UI Design">UI Design</option>
                        <option value="SEO">SEO</option>
                        <option value="Typography">Typography</option>
                        <option value="How not to">How not to</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                    <div
                        className={style.file_upload_wrapper}
                        data-text="Upload post image!"
                    >
                        <input
                            required
                            onChange={(e) => {
                                setNewImage(
                                    e.target.files ? e.target.files[0] : null
                                );
                            }}
                            name="file-upload-field"
                            type="file"
                            className={style.file_upload_field}
                        />
                    </div>
                    <div className={style.buttons}>
                        <button className={style.addPost} type="submit">
                            Edit post
                        </button>
                        <button
                            onClick={handleClearData}
                            type="reset"
                            className={style.clear}
                        >
                            Clear
                        </button>
                    </div>
                </form>
                <div className={style.photos}>
                    <img src={img1} alt="add-post photos" />
                    <img src={img2} alt="add-post photos" />
                    <img src={img3} alt="add-post photos" />
                    <img src={img4} alt="add-post photos" />
                </div>
            </div>
        </div>
    );
};
