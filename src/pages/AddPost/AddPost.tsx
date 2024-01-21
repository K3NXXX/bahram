import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { createPost } from "../../redux/slices/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import { toast } from "react-toastify";
import style from "./AddPost.module.scss";
import img1 from "../../assets/images/addPost/img1.jpg";
import img2 from "../../assets/images/addPost/img2.jpg";
import img3 from "../../assets/images/addPost/img3.jpg";
import img4 from "../../assets/images/addPost/img4.jpg";

export const AddPost: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("text", text);
            formData.append("type", type);

            if (selectedFile !== null) {
                if (selectedFile.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        if (event.target) {
                            const img = new Image();
                            img.src = event.target.result as string;

                            img.onload = () => {
                                if (img.width >= 200) {
                                    formData.append("image", selectedFile);
                                    dispatch(createPost(formData));
                                    toast.success("Post added successfully");
                                    navigate(HOME_ROUTE);
                                } else {
                                    toast.error(
                                        "The uploaded image must have a minimum width of 200 pixels."
                                    );
                                }
                            };
                        }
                    };
                    reader.readAsDataURL(selectedFile);
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
        setSelectedFile(null);
    };

    return (
        <div className={style.bg}>
            <div className={style.root}>
                <h5 className={style.root__title}>Adding Post</h5>

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
                            onChange={(e) =>
                                setSelectedFile(
                                    e.target.files ? e.target.files[0] : null
                                )
                            }
                            name="file-upload-field"
                            type="file"
                            className={style.file_upload_field}
                        />
                    </div>
                    <div className={style.buttons}>
                        <button className={style.addPost} type="submit">
                            Add post
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
