import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteComment,
  fetchComments,
  postComment,
} from "../../features/commentsSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import styles from "./OneProduct.module.css";
import { Input } from "antd";

const { TextArea } = Input;

const Comments = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const comments = useSelector((state) => state.comments.comments);
  const id = useParams();

  const add = useSelector((state) => state.comments.adding);

  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setComment(comment);
    dispatch(postComment({ id, comment }));
    setComment("");
  };

  const handleRemove = (idd) => {
    dispatch(deleteComment(idd));
  };

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [add]);

  function parseJWT(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload).id;
  }

  return (
    <div className={styles.blockForComments}>
      <hr />
      {comments.map((item) => {
        return (
          <div key={item._id}>
            {id.id === item.product ? (
              <div>
                <div className={styles.avatarName}>
                  <Space direction="vertical" size={16}>
                    <Avatar icon={<UserOutlined />} />
                  </Space>
                  <div className={styles.name}>{item.user.name}</div>
                </div>
                <div className={styles.text}>{item.text}</div>
                {token && parseJWT(token) === item.user._id ? (
                  <button
                    className={styles.deleteBut}
                    onClick={() => handleRemove(item._id)}
                  >
                    Удалить
                  </button>
                ) : (
                  ""
                )}
                <hr />
              </div>
            ) : (
              " "
            )}
          </div>
        );
      })}
      {token ? (
        <div>
          <br />
          <form className={styles.blockInput}>
          <TextArea
            className={styles.innput}
            type="text"
            onChange={handleChange}
            value={comment}
            rows={2}
            placeholder="maxLength is 156"
            maxLength={156}
          />

          <button type='submit' className={styles.addBut} onClick={handleClick}>
            Отправить комментарий
          </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comments;
