import React from 'react';
import './Comment.css';

interface CommentProps {
  rating: number;   // raing(Rate) -> 도서 평점에만 사용됨. 삭제?
  author: string;   // user_id(User)
  text: string;     // comment(Comment)
  likes: number;    // like
  replies: number;  // 대댓글은 erd에 없음.
}

const Comment: React.FC<CommentProps> = ({ rating, author, text, likes, replies }) => {
  const stars = Array(5).fill(0).map((_, i) => i < rating ? '★' : '☆');
  
  return (
    <div className="comment top-44 right-2">
      <div className="comment-header">
        <div className="comment-rating">
          {stars.map((star, index) => (
            <span key={index} className={`star ${star === '★' ? 'filled' : ''}`}>{star}</span>
          ))}
        </div>
        <div className="comment-author">
          <span className="author-name">{author}</span>
        </div>
      </div>
      <div className="comment-body">
        <p className="comment-text">{text}</p>
      </div>
      <div className="comment-footer">
        <div className="comment-actions">
          <span className="likes">👍 {likes}</span>
          <span className="replies">💬 {replies}</span> 
        </div>
      </div>
    </div>
  );
};

export default Comment;