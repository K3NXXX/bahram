import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { createPost } from '../../redux/slices/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts';
import style from './AddPost.module.scss';
import img1 from '../../assets/images/addPost/img1.jpg';
import img2 from '../../assets/images/addPost/img2.jpg';
import img3 from '../../assets/images/addPost/img3.jpg';
import img4 from '../../assets/images/addPost/img4.jpg';
import { toast } from 'react-toastify';


export const AddPost: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        if (selectedFile !== null) {
            formData.append('image', selectedFile);
        }
        await dispatch(createPost(formData));
        toast.success("Post added successfully")
        navigate(HOME_ROUTE)
    } catch (error) {
        console.error(error);
    }
  };

  const handleClearData = () => {
        setTitle('')
        setText('')
        setSelectedFile(null)
  }

  return (
    <div className={style.bg}>
      <div className={style.root}>
      
        <form onSubmit={submitHandler}>
          <textarea value={title}
            className={style.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea value={text}
            className={style.text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
          />
          <div className={style.file_upload_wrapper} data-text="Select your file!">
            <input onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)} name="file-upload-field" type="file" className={style.file_upload_field} value=""/>
          </div>
          <div className={style.buttons}>
            <button className={style.addPost} type="submit">Add post</button>
            <button onClick={handleClearData} type='reset' className={style.clear}>Clear</button>

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

export default AddPost;
