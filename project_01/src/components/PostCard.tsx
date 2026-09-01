import { BadgeCheck, Earth, Users, Lock } from 'lucide-react';
import type { postCompProps } from '../interfaces/componentProps';

export default function PostCard({
  id,
  pageName,
  isVerified,
  imagePost,
  status,
  like,
  comment,
  share,
  dateOfPost,
  privacy,
}: postCompProps) {
  return (
    <figure>
      <section className="page-profile-wrapper">
        <div className="profile-container">
          <img src={imagePost[0]} alt={`${pageName} - ${id}`} />
          <h3>
            {pageName}{' '}
            {isVerified ? <BadgeCheck color="var(--primary-color)" /> : ''}
          </h3>
        </div>
        <div className="date-container">
          {dateOfPost} .{' '}
          {privacy === 'public' ? (
            <Earth size={14} />
          ) : privacy === 'friend' ? (
            <Users size={14} />
          ) : (
            <Lock size={14} />
          )}
        </div>
      </section>

      <section className="status-wrapper">{status}</section>

      <section className="post-footer-wrapper">
        <div className="like-container">{like}</div>

        <div className="comment-container">{comment}</div>

        <div className="share-container">{share}</div>
      </section>
    </figure>
  );
}
