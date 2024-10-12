import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch(`http://localhost:3001/comments?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error comments:', error);
      });
  }, [userId]);

  const updateUserImage = (userId, image) => {
    fetch(`http://localhost:3001/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileImage: image }),
    })
    .then((res) => res.json())
    .then((updatedUser) => {
      setUser(updatedUser); 
    })
    .catch((error) => {
      console.error('Error updating user image:', error);
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; 
        setNewImage(base64Image);
        updateUserImage(userId, base64Image); 
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <p>You must have an account</p>; 
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src={newImage || user.profileImage}
          alt=""
        />
        <h5>Upload an Image</h5>
        <input type="file" accept="image/*"  onChange={handleImageUpload}
         />
        <h5>Full Name: {user.firstName + ' ' + user.lastName}</h5>
        <h5>Email: {user.email}</h5>
      </div>
      <div className="comments">
        <h2>Comments</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        ) : (
          <p>No comments made yet.</p>
        )}
      </div>
    </div>
  );
}
